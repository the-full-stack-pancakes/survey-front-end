const store = require('../store.js')
const two = require('../twos/events.js')
const api = require('./api.js')

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
  api.getOne(store.voteOne)
    .then(votedCount)
    .catch()
}
const votedCount = (response) => {
  console.log(response)
  store.voteOneCount = response.one.count
  console.log('=========')
  console.log(store.voteOneCount)
  console.log('=========')
}

module.exports = {
  onCreateOneSuccess,
  failure,
  onUpdateOneSuccess,
  onDeleteOneSuccess,
  onVotedSuccess
}
