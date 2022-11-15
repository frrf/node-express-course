const express = require('express')

const consoleLog = (req, res, next) => {
  if ("content-type" in req.headers) {
    if (req.headers["content-type"] !== 'application/json') {
    return res.status(404).send(`<h1>Content-Type:'${req.headers["content-type"]}' not supported. application/json is the only supporter content-type</h1>`)
    }
  } else {
    return res.status(404).send('<h1>No header</h1>')
  }
  next()
}
module.exports = consoleLog