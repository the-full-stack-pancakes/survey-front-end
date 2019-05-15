const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

// create
const onCreateOne = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.survey = data.survey
  console.log('===============================')
  console.log(data.survey.answer)
  console.log('===============================')
  api.createOne(data.survey.answer)
    .then(ui.onCreateOneSuccess)
    .catch(ui.failure)
}
// update
const onUpdateOne = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // will need to get data from a form here and an id
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
  // maybe something like this to get the ids
// const id = $(event.target).closest('section').data('id')
  api.votedOne(id)
    .then(ui.onVotedSuccess)
    .catch(ui.failure)
}

const oneHandlers = () => {
  $('#create-survey').on('submit', onCreateOne)
  // need a button for onUpdateOne
  // need a button for onDeleteOne
  // need a button for votedOne
}

module.exports = {
  oneHandlers
}
