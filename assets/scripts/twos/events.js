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
  const id = $(event.target).closest('button').data('id')
  store.voteTwo = id
  let count = $(event.target).closest('button').data('count')
  count += 1
  api.votedTwo(id, count)
    .then(ui.onVotedSuccess)
    .catch(ui.failure)
}

const twoHandlers = () => {
  $('#see-all-survey-content').on('click', '.survey-answer-2', onVotedTwo)
  // need a button for onUpdateTwo
  // need a button for onDeleteTwo
  // need a button for onVotedTwo
}

module.exports = {
  onCreateTwo,
  twoHandlers,
  onUpdateTwo
}
