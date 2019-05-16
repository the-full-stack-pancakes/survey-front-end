const config = require('../config')
const store = require('../store')

// Same as updateGame
const createSurvey = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      survey: {
        title: store.survey.title,
        description: store.survey.description,
        one: store.one._id,
        two: store.two._id
      }
    }
  })
}

const getYourSurveys = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllSurveys = function () {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteSurvey = function (id) {
  return $.ajax({
    url: config.apiUrl + `/surveys/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + `/surveys/${store.updateSurvey}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      survey: {
        title: data
      }
    }
  })
}

const takeSurvey = function (surveyId, answer) {
  return $.ajax({
    url: config.apiUrl + `/surveys`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'response': {
        'answer': answer,
        'surveyId': surveyId
      }
    }
  })
}
module.exports = {
  createSurvey,
  getYourSurveys,
  deleteSurvey,
  updateSurvey,
  getAllSurveys,
  takeSurvey
}
