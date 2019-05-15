const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetYourAnswers = () => {
  api.getYourAnswers()
    .then(ui.onGetYourAnswersSuccess)
    .catch(ui.failure)
}
const onCreateAnswer = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createAnswer(data)
    .then(ui.onCreateAnswerSuccess)
    .catch(ui.failure)
}
const onUpdateAnswers = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.updateAnswer(data)
    .then(ui.onUpdateAnswersSuccess)
    .catch(ui.failure)
}
const onDeleteAnswer = () => {
  api.deleteAnswer()
    .then(ui.onDeleteAnswerSuccess)
    .catch(ui.failure)
}

const answerHandlers = () => {
  $('#answer-form').on('submit', onCreateAnswer)
  $('#get-answers').on('click', onGetYourAnswers)
  $('#update-answer').on('submit', onUpdateAnswers)
  $('#destroy-answer').on('click', onDeleteAnswer)
}
module.exports = {
  answerHandlers,
  onGetYourAnswers
}
