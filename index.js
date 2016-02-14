'use strict'

const express = require('express')
const app = express()
const query = require('./lib/query')

app.get('/', (req, res) => {
  let q = req.query.q

  query(q)
  .then(resp => {
    res.json({ error: null, question: resp.question, answer: resp.answer })
  })
  .catch(err => {
    res.json({ error:  err.toString(), question: null, answer: null })
  })
})

app.listen(process.env.PORT || 3000)
