const store = require('../store.js')
const two = require('../twos/events.js')

const onCreateOneSuccess = (response) => {
  store.one = response.one
  console.log(store.one._id)
  two.onCreateTwo()
}
const failure = (response) => {
  console.log(response)
}
const onUpdateOneSuccess = (response) => {
  console.log(response)
}
const onDeleteOneSuccess = (response) => {
  console.log(response)
}
const onVotedSuccess = (response) => {
  console.log(response)
}

module.exports = {
  onCreateOneSuccess,
  failure,
  onUpdateOneSuccess,
  onDeleteOneSuccess,
  onVotedSuccess
}
