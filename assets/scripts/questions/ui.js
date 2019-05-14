const store = require('../store.js')

const onGetYourQuestionsSuccess = (response) => {
  console.log(response)
  store.question = response.question
}
module.exports = {
  onGetYourQuestionsSuccess
}
