const store = require('../store.js')

const onCreateAnswerSuccess = (response) => {
  store.answer = response.answer
  console.log(response)
  console.log(store.answer._id)
}
const failure = () => {
  console.log('you fail bro!')
}
const onGetYourAnswersSuccess = (response) => {
  console.log(response)
}
const onDeleteAnswerSuccess = (response) => {
  console.log(response)
}

module.exports = {
  onCreateAnswerSuccess,
  onGetYourAnswersSuccess,
  failure,
  onDeleteAnswerSuccess
}
