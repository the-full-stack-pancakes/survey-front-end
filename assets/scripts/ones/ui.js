const store = require('../store.js')
const two = require('../twos/events.js')
const api = require('./api.js')
const Chart = require('chart.js')
const chartUpdate = require('../lib/chart')
// const surveyEvents = require('../surveys/events.js')

const onCreateOneSuccess = (response) => {
  store.one = response.one
  two.onCreateTwo()
}
const failure = (response) => {
  $('.user-message').text('Sorry, something went wrong. Please try again.')
}
const onUpdateOneSuccess = (response) => {
  $('.user-message').text('Update successful')
}
const onDeleteOneSuccess = (response) => {
  $('.user-message').text('Delete successful')
}
const onVotedSuccess = (response) => {
  $('.user-message').text('Thanks for your vote!')
  api.getOne(store.voteOne)
    .then(votedCount)
    .catch()
}
const votedCount = (response) => {
  console.log('response for votedCount', response)
  // store.voteOneCount = response.one.count
  console.log('store voteOneCount', store.voteOneCount)
  let idOne = response.one._id
  // $('#see-all-survey-content').click(function () {
  //   chart.data.data[0] = store.voteOneCount
  // })
  // chart.render()
  let survey = store.surveys.find(function (survey) {
    return survey.one._id === idOne
  })

  survey.one.count = response.one.count
  console.log(survey)
  console.log('+++++++')

  chartUpdate(store.surveys)
}
// const updateChart1 = (Chart) => {
//   Chart.data.datasets.data[0] = 1
//   Chart.update()
// }




module.exports = {
  onCreateOneSuccess,
  failure,
  onUpdateOneSuccess,
  onDeleteOneSuccess,
  onVotedSuccess,
  votedCount
  // updateChart1
}
