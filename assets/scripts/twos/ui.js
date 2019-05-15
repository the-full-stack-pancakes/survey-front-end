const store = require('../store.js')

const onCreateTwoSuccess = (response) => {
  store.two = response.two
  console.log(response)
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
