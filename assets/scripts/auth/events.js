'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const signUpToggle = function () {
  $('#sign-in-modal').hide()
  $('#sign-up-modal').show()
}
const signInToggle = function () {
  $('#sign-up-modal').hide()
  $('#sign-in-modal').show()
}
const changePasswordToggle = () => {
  $('#change-password-modal').show()
}
const closeChangePassword = () => {
  $('#change-password-modal').hide()
}

const authHandlers = () => {
  $('.page-mask').show()
  $('#sign-in-modal').show()
  $('#sign-up-toggle').on('click', signUpToggle)
  $('#sign-in-toggle').on('click', signInToggle)
  $('#change-password-modal').hide()
  $('#change-password-toggle').on('click', changePasswordToggle)
  $('.close-change-password').on('click', closeChangePassword)
  //
  // $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('.sign-out').on('click', onSignOut)
}

module.exports = {
  authHandlers
}
