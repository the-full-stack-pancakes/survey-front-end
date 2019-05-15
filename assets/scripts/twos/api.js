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
const updateTwo = (data, id) => {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/twos/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      one: {
        // need to get data from a form
        title: data
      }
    }
  })
}
const deleteTwo = (id) => {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/twos/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const votedTwo = (id) => {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/ones/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      one: {
        // need to get data from a form
        // still needs testing
        count: store.survey.two.count + 1
      }
    }
  })
}

module.exports = {
  createTwo,
  updateTwo,
  deleteTwo,
  votedTwo
}
