import { getRGBData } from '../Mandelbrot'

// plot the results if the script is executed in a browser with a window-object
if (typeof window !== 'undefined') {
  const rgbData = getRGBData()
  const width = rgbData.length
  const height = rgbData[0].length
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const rgb = rgbData[x][y]
      ctx.fillStyle = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'
      ctx.fillRect(x, y, 1, 1)
    }
  }
  document.body.append(canvas)
}
