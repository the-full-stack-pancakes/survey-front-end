const config = require('../config.js')
const store = require('../store')

const createTwo = (data) => {
  return $.ajax({
    url: config.apiUrl + `/twos`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      two: {
        title: store.survey.answer2
      }
    }
  })
}

const updateTwo = (data) => {
  return $.ajax({
    url: config.apiUrl + `/twos/${store.updateTwo}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      two: {
        title: data
      }
    }
  })
}

const deleteTwo = (id) => {
  return $.ajax({
    url: config.apiUrl + `/twos/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const votedTwo = (id, num) => {
  return $.ajax({
    url: config.apiUrl + `/twos/${id}`,
    method: 'PATCH',
    data: {
      two: {
        count: num
      }
    }
  })
}

const getTwo = (id) => {
  return $.ajax({
    url: config.apiUrl + `/twos/${id}`,
    method: 'GET'
  })
}

module.exports = {
  createTwo,
  updateTwo,
  deleteTwo,
  votedTwo,
  getTwo
}
