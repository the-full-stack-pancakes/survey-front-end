const config = require('../config')
const store = require('../store')

// Same as updateGame
const createQuestion = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/questions/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getQuestions = function () {
  return $.ajax({
    url: config.apiUrl + '/questions',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteQuestion = function (id) {
  return $.ajax({
    url: config.apiUrl + `/questions/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateQuestion = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/questions/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion
}
