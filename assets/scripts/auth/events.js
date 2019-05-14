const getFormFields = require(`../../../lib/get-form-fields`)

// const api = require('./api')
// const ui = require('./ui')


const authHandlers = () => {
  $('.page-mask').show()
  $('#sign-in-modal').show()
}

module.exports = {
  authHandlers
}
