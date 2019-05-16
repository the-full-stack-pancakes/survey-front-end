const config = require('../config.js')
const store = require('../store')

const createOne = (data) => {
  return $.ajax({
    url: config.apiUrl + `/ones`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      one: {
        title: data
      }
    }
  })
}
const updateOne = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/ones/${store.updateOne}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      one: {
        title: data
      }
    }
  })
}
const deleteOne = (id) => {
  return $.ajax({
    // this is going to need a way to get an id of an answer so we can update
    // a single id.
    url: config.apiUrl + `/ones/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const votedOne = (id, num) => {
  return $.ajax({
    url: config.apiUrl + `/ones/${id}`,
    method: 'PATCH',
    data: {
      one: {
        count: num
      }
    }
  })
}

module.exports = {
  createOne,
  updateOne,
  deleteOne,
  votedOne
}
