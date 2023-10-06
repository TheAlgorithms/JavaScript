/*
This program calculates the area, perimeter, and interior angle of a regular n-gon
given the side length and the number of sides.
*/

class Polygon{
  constructor(sideLength, sides) {
    this.sideLength = sideLength
    this.sides = sides
  }

  area = () => {
    return (this.sides*this.sideLength*this.sideLength*Math.tan(Math.PI*(this.sides-2)/(2*this.sides)))/4
  }

  perimeter = () => {
    return this.sides*this.sideLength
  }

  angleDeg = () => {
    return (180*(this.sides-2)/(this.sides))
  }

  angleRad = () => {
    return (Math.PI*(this.sides-2)/(this.sides))
  }
}
