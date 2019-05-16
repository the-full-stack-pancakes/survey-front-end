'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-up-modal').hide()
  $('#sign-in-modal').show()
  $('.welcome-sign-in').text('Success! Now sign in!')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('.welcome-sign-up').text('Something went wrong. Please try again')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  store.user = data.user

  $('#sign-in-modal').hide()
  $('.page-mask').hide()
  $('.user-message').text(`Welcome ${store.user.email}`)
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  $('.welcome-sign-in').text('Sign-in error. Please try again')
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('#change-password-modal').hide()
  $('.side-bar').width('0%')
  $('.user-message').text('Password changed!')
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
  $('.user-message').text('Please try again!')
}

const signOutSuccess = function (data) {
  $('form').trigger('reset')
  store.user = null
  $('.page-mask').show()
  $('.side-bar').width('0%')
  $('#sign-in-modal').show()
  $('.welcome-sign-in').text('Goodbye!')
  $('.collapse').collapse('hide')
  $('.user-message').text('')
}

const signOutFailure = function (data) {
  $('form').trigger('reset')
  $('.user-message').text('Please try again!')
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
