const api = require('./api.js')
const ui = require('./ui.js')

const onGetYourQuestions = () => {
  api.getYourQuestions()
    .then(ui.onGetYourQuestionsSuccess)
    .catch(ui.failure)
}
const questionHandlers = () => {
  $('#get-your-questions').on('click', onGetYourQuestions)
}
module.exports = {
  onGetYourQuestions,
  questionHandlers
}
