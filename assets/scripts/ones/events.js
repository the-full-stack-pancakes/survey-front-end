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
const onVotedOne = (event) => {
// this should work we need a button that is hooked up with a data-one thing.
// const id = $(event.target).closest('button').data('id')
  api.votedOne(id)
    .then(ui.onVotedSuccess)
    .catch(ui.failure)
}

const oneHandlers = () => {
  $('#create-survey').on('submit', create)
  // need a button for onUpdateOne
  // need a button for onDeleteOne
  // need a button for votedOne
}

module.exports = {
  oneHandlers,
  onUpdateOne
}
