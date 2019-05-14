const config = require('../config.js')
const store = require('../store')

const getYourAnswers = () => {
  return $.ajax({
    url: config.apiUrl + `/answers`,
    method: 'GET'
  })
}
const createAnswer = (data) => {
  return $.ajax({
    url: config.apiUrl + `/answers`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateAnswer = function (data, id) {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/answers/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteAnswer = function (id) {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/answers/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getYourAnswers,
  createAnswer,
  updateAnswer,
  deleteAnswer
}
