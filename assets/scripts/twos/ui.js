const store = require('../store.js')
const survey = require('../surveys/events.js')

const onCreateTwoSuccess = (response) => {
  store.two = response.two
  console.log(response)
  console.log('======================')
  console.log(store.one._id)
  console.log(store.one._id)
  console.log(store.survey)
  console.log('======================')
  survey.onCreateSurvey()
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
  console.log(response)
}

module.exports = {
  onCreateTwoSuccess,
  failure,
  onUpdateTwoSuccess,
  onDeleteTwoSuccess,
  onVotedSuccess
}
