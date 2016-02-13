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

    x('http://canigivemydog.com/' + q, ['strong'])((err, res) => {
      if (err) {
        return reject(err)
      }

      let answer = res[1].split(': ')[1]
      resolve(answer)
    })
  })
}
