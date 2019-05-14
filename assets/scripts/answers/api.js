const config = require('../config')
const store = require('../store')

// Same as updateGame
const createAnswer = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/answers/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAnswers = function () {
  return $.ajax({
    url: config.apiUrl + '/answers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAnswer = function (id) {
  return $.ajax({
    url: config.apiUrl + `/answers/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateAnswer = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/answers/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createAnswer,
  getAnswers,
  deleteAnswer,
  updateAnswer
}
