const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onCreateTwo = () => {
  api.createTwo()
    .then(ui.onCreateTwoSuccess)
    .catch(ui.failure)
}
const onUpdateTwo = (data) => {
  api.updateTwo(data)
    .then(ui.onUpdateTwoSuccess)
    .catch(ui.failure)
}
// destroy
const onDeleteTwo = (id) => {
  api.deleteTwo(id)
    .then(ui.onDeleteTwoSuccess)
    .catch(ui.failure)
}
// voted
const onVotedTwo = (event) => {
  // maybe something like this to get the ids
// const id = $(event.target).closest('section').data('id')
  api.votedTwo(id)
    .then(ui.onVotedSuccess)
    .catch(ui.failure)
}

const twoHandlers = () => {
  // need a button for onUpdateTwo
  // need a button for onDeleteTwo
  // need a button for onVotedTwo
}

module.exports = {
  onCreateTwo,
  twoHandlers,
  onUpdateTwo
}
