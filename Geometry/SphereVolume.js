// https://en.wikipedia.org/wiki/Sphere rounds to 2 decimal places
const sphereVolume = (radius) => {
  const volume = Math.pow(radius, 3) * Math.PI * 4 / 3
  return parseFloat(volume.toFixed(2))
}

export { sphereVolume }
