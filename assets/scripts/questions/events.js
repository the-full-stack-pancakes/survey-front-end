const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateQuestion = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data.question.title)
  api.createAnswer(data.question.title)
    .then(ui.onCreateQuestionSuccess)
    .catch(ui.failure)
}
const onGetYourQuestions = () => {
  api.getYourQuestions()
    .then(ui.onGetYourQuestionsSuccess)
    .catch(ui.failure)
}
const onUpdateQuestion = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateQuestion(data)
    .then(ui.onUpdateQuestionSuccess)
    .catch(ui.failure)
}
const onDeleteQuestion = () => {
  api.deleteQuestion()
    .then(ui.onDeleteQuestionSuccess)
    .catch(ui.failure)
}

const questionHandler = () => {
  $('#question-form').on('submit', onCreateQuestion)
  $('#get-questions').on('click', onGetYourQuestions)
  $('#update-question').on('submit', onUpdateQuestion)
  $('#delete-question').on('click', onDeleteQuestion)
}
module.exports = {
  onCreateQuestion,
  questionHandler
}
