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

    x('http://canigivemydog.com/' + q, { question: 'h1.entry-title', answerStrong: 'div.thecontent.clearfix > h2 > strong', answerB: 'div.thecontent.clearfix > h2 > b' })((err, res) => {
      if (err) {
        return reject(err)
      }

      if (res.answerStrong) {
        resolve({ question: res.question, answer: res.answerStrong.split(': ')[1] })
      } else if (res.answerB) {
        resolve({ question: res.question, answer: res.answerB.split(': ')[1] })
      } else {
        resolve({ question: res.question, answer: 'Trouble finding the answer.' })
      }
    })
  })
}
