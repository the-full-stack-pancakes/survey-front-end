const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const one = require('../ones/events.js')
const two = require('../twos/events.js')

const update = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).closest('form').data('id')
  const oneId = $(event.target).closest('form').data('one')
  const twoId = $(event.target).closest('form').data('two')
  store.updateSurvey = id
  store.updateOne = oneId
  store.updateTwo = twoId
  one.onUpdateOne(data.survey.answer)
  two.onUpdateTwo(data.survey.answer2)
  onUpdateSurvey(data.survey.title)
}

const onCreateSurvey = () => {
  api.createSurvey()
    .then(ui.onCreateSurveySuccess)
    .catch(ui.failure)
}
const onGetYourSurveys = () => {
  api.getYourSurveys()
    .then(ui.onGetYourSurveysSuccess)
    .catch(ui.failure)
}

const onGetAllSurveys = () => {
  api.getAllSurveys()
    .then(ui.onGetAllSurveysSuccess)
    .catch(ui.failure)
}

const onUpdateSurvey = (data) => {
  api.updateSurvey(data)
    .then(ui.onUpdateSurveySuccess)
    .catch(ui.failure)
}
const onDeleteSurvey = () => {
  const id = $(event.target).closest('button').data('id')
  console.log(id)
  api.deleteSurvey(id)
    .then(ui.onDeleteSurveySuccess)
    .catch(ui.failure)
}

const onTakeSurvey = (event) => {
  event.preventDefault()

  console.log('click')
  console.log(event)
  // let id = $event.target
  // const oneId = $(event.target).closest('form').data('one')
  // console.log(oneId)
  // const twoId = $(event.target).closest('form').data('two')
  // console.log(twoId)
  // const id = $(event.target).closest('article').data('id')
  // console.log(id)
  const surveyId = $(event.target).closest('form').data('id')
  console.log(surveyId)

  const answer = $(`input[name='${surveyId}']`).val()
  console.log(answer)

  // api.takeSurvey(surveyId, answer)
  //   .then(ui.takeSurveySuccess)
  //   .catch(ui.takeSurveyFailure)
}

const surveyHandlers = function () {
  $('#get-surveys').on('click', onGetYourSurveys)
  $('#my-survey-content').on('submit', '.update-survey', update)

  $('#index-surveys').on('click', onGetAllSurveys)
  $('#my-survey-content').on('submit', '.update-survey', onUpdateSurvey)

  $('#my-survey-content').on('click', '.btn-dark', onUpdateSurvey)
  $('.survey-response').on('submit', onTakeSurvey)
  $('#survey-response').on('submit', onTakeSurvey)
  $('#surveyResponse').on('submit', onTakeSurvey)
  $('#see-all-survey-content').on('submit', '#survey-response', onTakeSurvey)
  $('#my-survey-content').on('click', '.btn-dark', onDeleteSurvey)
}

module.exports = {
  surveyHandlers,
  onCreateSurvey
}
