const store = require('../store.js')

const onCreateQuestionSuccess = (response) => {
  console.log(response)
  store.question = response.question
  console.log(store.question._id)
}
const failure = () => {
  console.log('you fail bro!')
}
const onGetYourQuestionsSuccess = (response) => {
  console.log(response)
}
const onDeleteQuestionSuccess = (response) => {
  console.log(response)
}

module.exports = {
  onCreateQuestionSuccess,
  failure,
  onGetYourQuestionsSuccess,
  onDeleteQuestionSuccess
}
