const express = require('express')

const consoleLog = (req, res, next) => {
  console.log('Statement to the console')
  next()
}
module.exports = consoleLog
