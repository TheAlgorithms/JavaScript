/*
	  Calculate the volume of the shapes
	
	  Volume for Cuboid
    Volume for Cube
    Volume for Cone
    Volume for Pyramid
    Volume for Cylinder
    Volume for Triangular Prism
    Volume for Pentagonal Prism
    Volume for Sphere 
    Volume for Hemisphere
	 */

/*
  Calculate the volume for a Cuboid
  Reference: https://www.cuemath.com/measurement/volume-of-cuboid/
  return width * length * height
*/
const volCuboid = (width, length, height) => {
  isNumber(width, 'Width')
  isNumber(length, 'Length')
  isNumber(height, 'Height')
  return (width * length * height)
}

/*
  Calculate the volume for a Cube
  Reference: https://www.cuemath.com/measurement/volume-of-cube/
  return length * length * length
*/
const volCube = (length) => {
  isNumber(length, 'Length')
  return (length ** 3)
}

/*
  Calculate the volume for a Cone
  Reference: https://www.cuemath.com/measurement/volume-of-cone/
  return PI * radius^2 * height/3
*/
const volCone = (radius, height) => {
  isNumber(radius, 'Radius')
  isNumber(height, 'Height')
  return (Math.PI * radius ** 2 * height/3.0)
}

/*
  Calculate the volume for a Pyramid
  Reference: https://www.cuemath.com/measurement/volume-of-pyramid/
  return (baseLength * baseWidth * height) / 3
*/
const volPyramid = (baseLength, baseWidth, height) => {
  isNumber(baseLength, 'BaseLength')
  isNumber(baseWidth, 'BaseWidth')
  isNumber(height, 'Height')
  return (baseLength * baseWidth * height) / 3.0 
}

/*
  Calculate the volume for a Cylinder
  Reference: https://www.cuemath.com/measurement/volume-of-cylinder/
  return PI * radius^2 * height
*/
const volCylinder = (radius, height) => {
  isNumber(radius, 'Radius')
  isNumber(height, 'Height')
  return (Math.PI * radius ** 2 * height)
}

/*
  Calculate the volume for a Triangular Prism
  Reference: http://lrd.kangan.edu.au/numbers/content/03_volume/04_page.htm
  return 1 / 2 * baseLengthTriangle * heightTriangle * height 
*/
const volTriangularPrism = (baseLengthTriangle, heightTriangle, height) => {
  isNumber(baseLengthTriangle, 'BaseLengthTriangle')
  isNumber(heightTriangle, 'HeightTriangle')
  isNumber(height, 'Height')
  return (1 / 2 * baseLengthTriangle * heightTriangle * height)
}

/*
  Calculate the volume for a Pentagonal Prism
  Reference: https://www.cuemath.com/measurement/volume-of-pentagonal-prism/
  return 5/2 * pentagonalLength * pentagonalBaseLength * height
*/
const volPentagonalPrism = (pentagonalLength, pentagonalBaseLength, height) => {
  isNumber(pentagonalLength, 'PentagonalLength')
  isNumber(pentagonalBaseLength, 'PentagonalBaseLength')
  isNumber(height, 'Height')
  return (5/2 * pentagonalLength * pentagonalBaseLength * height)
}

/*
  Calculate the volume for a Sphere
  Reference: https://www.cuemath.com/measurement/volume-of-sphere/
  return 4/3 * PI * radius^3
*/
const volSphere = (radius) => {
  isNumber(radius, 'Radius')
  return (4/3 * Math.PI * radius ** 3)
}

/*
  Calculate the volume for a Hemisphere
  Reference: https://www.cuemath.com/measurement/volume-of-hemisphere/
  return (2 * PI * radius^3)/3
*/
const volHemisphere = (radius) => {
  isNumber(radius, 'Radius')
  return (2.0 * Math.PI * radius ** 3)/ 3.0
}

const isNumber = (number, noName = 'number') => {
  if (typeof number !== 'number') {
    throw new TypeError('The ' + noName + ' should be Number type')
  } else if (number < 0) {
    throw new Error('The ' + noName + ' only accepts positive values')
  }
}

export {volCuboid, volCube, volCone, volPyramid, volCylinder, volTriangularPrism, volPentagonalPrism, volSphere, volHemisphere }
