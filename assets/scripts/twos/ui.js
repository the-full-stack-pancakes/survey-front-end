const store = require('../store.js')
const sur = require('../surveys/api.js')

const onCreateTwoSuccess = (response) => {
  console.log('got here')
  store.two = response.two
  sur.createSurvey()
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
