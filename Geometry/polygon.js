/*
This program calculates the area, perimeter, and interior angle of a regular n-gon given the side length.
*/

class polygon{
  constructor(sidelength, sides) {
    this.sidelength = sidelength
    this.sides = sides
  }

  area = () => {
    return (this.sides*this.sidelength*this.sidelength*Math.tan(Math.PI*(this.sides-2)/(2*this.sides)))/4
  }

  perimeter = () => {
    return this.sides*this.sidelength
  }

  angle_deg = () => {
    return (180*(this.sides-2)/(this.sides))
  }

  angle_rad = () => {
    return (Math.PI*(this.sides-2)/(this.sides))
  }
}
