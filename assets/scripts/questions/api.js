const config = require('../config.js')
const store = require('../store.js')

const getYourQuestions = () => {
  return $.ajax({
    url: config.apiUrl + `/questions`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  getYourQuestions
}
