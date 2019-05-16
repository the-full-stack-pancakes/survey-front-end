const store = require('../store')
const getSurveysTemplate = require('../templates/get-surveys.handlebars')
const takeSurveysTemplate = require('../templates/take-surveys.handlebars')

const failure = () => {
  console.log('you fail bro!')
  // needs to display more places
  $('#display-my-surveys-message').text('Sorry. Something went wrong. Please try again.')
}
const onCreateSurveySuccess = function (response) {
  store.survey = response.survey
  console.log('======================')
  console.log(response)
  console.log(store.survey)
  console.log('======================')
  // needs to display somewhere
  $('.user-message').text('You have successfully created a survey!')
}
const onUpdateSurveySuccess = (response) => {
  console.log(response)
  // needs to display somewhere
  $('#').text('You have successfully updated your survey!')
}
const onGetYourSurveysSuccess = (data) => {
  $('#display-my-surveys-message').text('Your serveys are displayed below:')
  const ownedSurveys = data.surveys.filter(survey => survey.owner === store.user._id)
  const getSurveysHtml = getSurveysTemplate({ surveys: ownedSurveys})
  $('#my-survey-content').html(getSurveysHtml)
}
const onDeleteSurveySuccess = (response) => {
  console.log(response)
  // needs to display somewhere
  $('#').text('You have successfully deleted your survey!')
}

const onGetAllSurveysSuccess = (data) => {
  console.log(data)
  $('#display-see-all-surveys-message').text('See all serveys displayed below:')
  const takeSurveysHtml = takeSurveysTemplate({ surveys: data.surveys })
  $('#see-all-survey-content').html(takeSurveysHtml)
}

// const takeSurveySuccess = (data) => {
//
// }
//
// const takeSurveyFailure = (data) => {
//
// }

const clearSurveys = () => {
  $('.content').empty()
}

module.exports = {
  onCreateSurveySuccess,
  onGetYourSurveysSuccess,
  clearSurveys,
  failure,
  onUpdateSurveySuccess,
  onDeleteSurveySuccess,
  onGetAllSurveysSuccess
  // takeSurveySuccess,
  // takeSurveyFailure
}
