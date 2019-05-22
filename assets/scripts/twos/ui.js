const store = require('../store.js')
const sur = require('../surveys/api.js')
const ui = require('../surveys/ui.js')
const api = require('./api.js')

const onCreateTwoSuccess = (response) => {
  store.two = response.two
  sur.createSurvey()
    .then(ui.onCreateSurveySuccess)
    .catch(ui.failure)
}

const failure = (response) => {
  $('.user-message').text('Sorry, something went wrong. Please try again.')
}

const onUpdateTwoSuccess = (response) => {
  $('.user-message').text('Update successful')
}

const onDeleteTwoSuccess = (response) => {
  $('.user-message').text('Delete successful')
}

const onVotedSuccess = (response) => {
  $('.user-message').text('Thanks for your vote!')
  api.getTwo(store.voteTwo)
    .then(votedCount)
    .catch()
}
const votedCount = (response) => {
  store.voteTwoCount = response.two.count

}

module.exports = {
  onCreateTwoSuccess,
  failure,
  onUpdateTwoSuccess,
  onDeleteTwoSuccess,
  onVotedSuccess
}
