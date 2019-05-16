const store = require('../store.js')
const sur = require('../surveys/api.js')
const ui = require('../surveys/ui.js')
const api = require('./api.js')

const onCreateTwoSuccess = (response) => {
  console.log('got here')
  store.two = response.two
  sur.createSurvey()
    .then(ui.onCreateSurveySuccess)
    .catch(ui.failure)
}
const failure = (response) => {
  console.log(response)
}
const onUpdateTwoSuccess = (response) => {
  console.log(response)
}
const onDeleteTwoSuccess = (response) => {
  console.log(response)
}

const onVotedSuccess = (response) => {
  api.getTwo(store.voteTwo)
    .then(votedCount)
    .catch()
}
const votedCount = (response) => {
  store.voteTwoCount = response.two.count
  console.log('=========')
  console.log(store.voteTwoCount)
  console.log('=========')
}

module.exports = {
  onCreateTwoSuccess,
  failure,
  onUpdateTwoSuccess,
  onDeleteTwoSuccess,
  onVotedSuccess
}
