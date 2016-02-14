'use strict'

const xray = require('x-ray')
const x = xray()

module.exports = query => {
  return new Promise((resolve, reject) => {
    let q = null

    if (query.split(' ').length > 1) {
      q = query.split(' ').join('-')
    } else {
      q = query
    }

    x('http://canigivemydog.com/' + q, { question: 'div.headline_area > h1', answer: 'div.format_text.entry-content > h2 > strong' })((err, res) => {
      if (err) {
        return reject(err)
      }

      let answer = res.answer.split(': ')[1]
      resolve({ question: res.question, answer })
    })
  })
}
