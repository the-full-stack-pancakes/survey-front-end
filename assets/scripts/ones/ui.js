const store = require('../store.js')

const onCreateOneSuccess = (response) => {
  store.one = response.one
  console.log(store.one)
}
const failure = (response) => {
  console.log(response)
}
const onUpdateOneSuccess = (response) => {
  console.log(response)
}

module.exports = {
  onCreateOneSuccess,
  failure,
  onUpdateOneSuccess
}
