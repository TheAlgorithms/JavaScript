/*
In mathematics and computational science, the Euler method (also called forward Euler method) is a first-order numerical procedure for solving ordinary differential equations (ODEs) with a given initial value. It is the most basic explicit method for numerical integration of ordinary differential equations. The method proceeds in a series of steps. At each step the y-value is calculated by evaluating the differential equation at the previous step, multiplying the result with the step-size and adding it to the last y-value: y_n+1 = y_n + stepSize * f(x_n, y_n).
(description adapted from https://en.wikipedia.org/wiki/Euler_method )
(see also: https://www.geeksforgeeks.org/euler-method-solving-differential-equation/ )
*/

/*
Doctests
> eulerStep(0, 0.1, 0, function(x, y){return x})
0
> eulerStep(2, 1, 1, function(x, y){return x * x})
5
> eulerFull(0, 3, 1, 0, function(x, y){return x})
[{"x": 0, "y": 0}, {"x": 1, "y": 0}, {"x": 2, "y": 1}, {"x": 3, "y": 3}]
> eulerFull(3, 4, 0.5, 1, function(x, y){return x * x})
[{"x": 3, "y": 1}, {"x": 3.5, "y": 5.5}, {"x": 4, "y": 11.625}]
*/

function eulerStep (xCurrent, stepSize, yCurrent, differentialEquation) {
  // calculates the next y-value based on the current value of x, y and the stepSize
  const yNext = yCurrent + stepSize * differentialEquation(xCurrent, yCurrent)
  return yNext
}

function eulerFull (xStart, xEnd, stepSize, yStart, differentialEquation) {
  // loops through all the steps until xEnd is reached, adds a point for each step and then returns all the points
  const points = [{ x: xStart, y: yStart }]
  let yCurrent = yStart
  let xCurrent = xStart

  while (xCurrent <= xEnd - stepSize) {
    // Euler method for next step
    yCurrent = eulerStep(xCurrent, stepSize, yCurrent, differentialEquation)
    xCurrent += stepSize
    points.push({ x: xCurrent, y: yCurrent })
  }

  return points
}

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
        label: label,
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

const points1 = eulerFull(0, 4, 0.1, 0, exampleEquation1)
const points2 = eulerFull(0, 4.1, 0.1, 1, exampleEquation2)
const points3 = eulerFull(0, 0.1, 0.025, 1, exampleEquation3)

console.log(points1)
console.log(points2)
console.log(points3)

// plot the results if the script is executed in a browser with a window-object
if (typeof window !== 'undefined') {
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
