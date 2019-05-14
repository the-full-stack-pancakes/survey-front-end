const store = require('../store')
// const getSurveysTemplate = require('../templates/get-surveys.handlebars')

const createSurveySuccess = function (data) {

}

const createSurveyFailure = function (data) {

}

const updateSurveySuccess = (data) => {

}

const getSurveysSuccess = (data) => {

// const getSurveysHtml = getSurveysTemplate({ surveys: data.surveys })

}

const clearSurveys = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
  // $('#message').text('error')
}

module.exports = {
  createSurveySuccess,
  createSurveyFailure,
  getSurveysSuccess,
  clearSurveys,
  failure,
  updateSurveySuccess
}
