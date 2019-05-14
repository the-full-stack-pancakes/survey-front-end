const config = require('../config')
const store = require('../store')

// Same as updateGame
const createSurvey = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/surveys/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getSurveys = function () {
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

const updateSurvey = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/surveys/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createSurvey,
  getSurveys,
  deleteSurvey,
  updateSurvey
}
