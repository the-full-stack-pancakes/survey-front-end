const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateSurvey = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  //
  // api.createSurvey(data)
  //   .then(ui.createSurveySuccess)
  //   .catch(ui.createSurveyFailure)
}

const onUpdateSurvey = function (event) {
  event.preventDefault()

  // api.updateSurvey(data, id)
  //   .then(ui.updateSurveySuccess)
  //   .catch(ui.updateSurveyFailure)
}

const onGetSurveys = function (event) {
  event.preventDefault()

  // .then(ui.getSurveysSuccess)
  // .catch(ui.failure)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()

  // const id = $(event.target).data('id')
  // api.deleteSurvey(id)
  //   .then()
  //   .catch(ui.failure)
}

const onClearSurveys = (event) => {
  // event.preventDefault()
  // ui.clearSurveys()
}

const addHandlers = function () {
  // $('#create-survey').on('submit', onCreateSurvey)
  // $('#getSurveysButton').on('click', onGetSurveys)
  // $('#clearSurveysButton').on('click', onClearSurveys)
  // $('#content').on('click', '.delete', onDeleteSurvey)
  // $('#content').on('submit', '.update-form', onUpdateSurvey)
}

module.exports = {
  addHandlers
}
