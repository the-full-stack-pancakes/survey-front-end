'use strict'

const Chart = require('chart.js')
const store = require('../store')


const chartUpdate = (surveys) => {
  console.log(store)
  console.log('hello Ben')
  surveys.forEach(survey => {
    const surveyChart = new Chart(document.getElementById(`bar-chart-${survey.one.title}`), {
      type: 'horizontalBar',
      data: {
        // Y axis label
        labels: [survey.one.title, survey.two.title],
        datasets: [{
          label: '',
          // colors of bars
          backgroundColor: ['#76D7C4', '#287D9D'],
          // data to display
          data: [survey.one.count, survey.two.count]
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
    console.log(surveyChart)
    // Chart.update()
  })
}

module.exports =
  chartUpdate
