const store = require('../store')
const getSurveysTemplate = require('../templates/get-surveys.handlebars')
const takeSurveysTemplate = require('../templates/take-surveys.handlebars')

const failure = () => {
  $('#display-my-surveys-message').text('Sorry, something went wrong. Please try again.')
}
const onCreateSurveySuccess = function (response) {
  store.survey = response.survey
  $('.collapse').collapse('hide')
  $('.user-message').text('You have successfully created a survey!')
  $('#create-survey .input-reset').val("")
}
const onUpdateSurveySuccess = (response) => {
  $('.user-message').text('You have successfully updated your survey!')
  $('.collapse').collapse('hide')
  $(".modal-backdrop").remove()
}
const onGetYourSurveysSuccess = (data) => {
  $('.user-message').text('Your surveys are displayed below:')
  const ownedSurveys = data.surveys.filter(survey => survey.owner === store.user._id)
  const getSurveysHtml = getSurveysTemplate({ surveys: ownedSurveys })
  $('#my-survey-content').html(getSurveysHtml)
}
const onDeleteSurveySuccess = (response) => {
  $('.user-message').text('You have successfully deleted your survey!')
  $('.collapse').collapse('hide')
}

const onGetAllSurveysSuccess = (data) => {
  $('.user-message').text('All surveys are displayed below:')
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
