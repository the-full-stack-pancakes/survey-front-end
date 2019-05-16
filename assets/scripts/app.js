'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const surveyEvents = require('./surveys/events.js')
const oneEvents = require('./ones/events.js')
const twoEvents = require('./twos/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.authHandlers()
  surveyEvents.surveyHandlers()
  oneEvents.oneHandlers()
  twoEvents.twoHandlers()
})
