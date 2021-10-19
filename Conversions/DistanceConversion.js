//Wikipedia Foot page used https://en.wikipedia.org/wiki/Foot_(unit)
const feetToMeters = (feet)=>{
  return feet*0.3048
}

const metersToFeet = (meters)=>{
  return meters*(1/0.3048)
}

feetToMeters(50) //15.24
metersToFeet(50) //164.04199475065616