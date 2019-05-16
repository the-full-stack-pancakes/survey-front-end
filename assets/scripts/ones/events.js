const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

// create
const create = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.survey = data.survey
  onCreateOne()
}
const onCreateOne = () => {
  api.createOne(store.survey.answer)
    .then(ui.onCreateOneSuccess)
    .catch(ui.failure)
}
// update
const onUpdateOne = (data) => {
  api.updateOne(data)
    .then(ui.onUpdateOneSuccess)
    .catch(ui.failure)
}
// destroy
const onDeleteOne = (id) => {
  api.deleteOne(id)
    .then(ui.onDeleteOneSuccess)
    .catch(ui.failure)
}
// voted
const onVotedOne = () => {
  const id = $(event.target).closest('button').data('id')
  let count = $(event.target).closest('button').data('count')
  count += 1
  api.votedOne(id, count)
    // .then(function () { onUpdateOne(count) })
    .then(ui.onVotedSuccess)
    .catch(ui.failure)
}

const oneHandlers = () => {
  $('#create-survey').on('submit', create)
  $('#see-all-survey-content').on('click', '.survey-answer-1', onVotedOne)
  // need a button for onUpdateOne
  // need a button for onDeleteOne
  // need a button for votedOne
}

module.exports = {
  oneHandlers,
  onUpdateOne
}
