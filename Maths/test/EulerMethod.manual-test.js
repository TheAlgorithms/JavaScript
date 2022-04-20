import { eulerFull } from '../EulerMethod'

function plotLine (label, points, width, height) {
  // utility function to plot the results

  // container needed to control the size of the canvas
  const container = document.createElement('div')
  container.style.width = width + 'px'
  container.style.height = height + 'px'
  document.body.append(container)

  // the canvas for plotting
  const canvas = document.createElement('canvas')
  container.append(canvas)

  // Chart-class from chartjs
  const chart = new Chart(canvas, { // eslint-disable-line
    type: 'scatter',
    data: {
      datasets: [{
        label,
        data: points,
        showLine: true,
        fill: false,
        tension: 0,
        borderColor: 'black'
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true
    }
  })
}

function exampleEquation1 (x, y) {
  return x
}

// example from https://en.wikipedia.org/wiki/Euler_method
function exampleEquation2 (x, y) {
  return y
}

// example from https://www.geeksforgeeks.org/euler-method-solving-differential-equation/
function exampleEquation3 (x, y) {
  return x + y + x * y
}

// plot the results if the script is executed in a browser with a window-object
if (typeof window !== 'undefined') {
  const points1 = eulerFull(0, 4, 0.1, 0, exampleEquation1)
  const points2 = eulerFull(0, 4, 0.1, 1, exampleEquation2)
  const points3 = eulerFull(0, 0.1, 0.025, 1, exampleEquation3)

  const script = document.createElement('script')

  // using chartjs
  script.src = 'https://www.chartjs.org/dist/2.9.4/Chart.min.js'
  script.onload = function () {
    plotLine('example 1: dy/dx = x', points1, 600, 400)
    plotLine('example 2: dy/dx = y', points2, 600, 400)
    plotLine('example 3: dy/dx = x + y + x * y', points3, 600, 400)
  }
  document.body.append(script)
}
