'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const answerEvents = require('./answers/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.authHandlers()
  answerEvents.answerHandlers()
})
