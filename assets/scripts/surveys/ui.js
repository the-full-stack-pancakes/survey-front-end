const store = require('../store')
// const getSurveysTemplate = require('../templates/get-surveys.handlebars')

const failure = () => {
  console.log('you fail bro!')
}
const oncreateSurveySuccess = function (response) {
  store.survey = response.survey
  console.log(response)
  console.log(store.survey)
}
const onUpdateSurveySuccess = (response) => {
  console.log(response)
}
const onGetYourSurveysSuccess = (response) => {
  console.log(response)
// const getSurveysHtml = getSurveysTemplate({ surveys: data.surveys })
}
const onDeleteSurveySuccess = (response) => {
  console.log(response)
}
const clearSurveys = () => {
  $('.content').empty()
}

module.exports = {
  oncreateSurveySuccess,
  onGetYourSurveysSuccess,
  clearSurveys,
  failure,
  onUpdateSurveySuccess,
  onDeleteSurveySuccess
}
