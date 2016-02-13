'use strict'

const express = require('express')
const app = express()
const query = require('./lib/query')

app.get('/', (req, res) => {
  let q = req.query.q

  query(q)
  .then(answer => {
    res.json({ err: null, answer })
  })
  .catch(err => {
    res.json({ err:  err.toString(), answer: null })
  })
})

app.listen(3000)
