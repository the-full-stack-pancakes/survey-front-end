'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  store.user = data.user

  $('#sign-in-modal').hide()
  $('.page-mask').hide()
  // $('.user-message').text(`Welcome ${store.user.email}`)
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('form').trigger('reset')

store.user = null
}

const signOutFailure = function (data) {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
