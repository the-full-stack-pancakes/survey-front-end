const config = require('../config.js')
const store = require('../store.js')

const createAnswer = (data, id) => {
  return $.ajax({
    url: config.apiUrl + `/questions`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      question: {
        title: data,
        answer: store.answer._id
      }
    }
  })
}

const getYourQuestions = () => {
  return $.ajax({
    url: config.apiUrl + `/questions/`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateQuestion = function (data, id) {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/questions/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteQuestion = (id) => {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/questions/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createAnswer,
  getYourQuestions,
  updateQuestion,
  deleteQuestion
}
