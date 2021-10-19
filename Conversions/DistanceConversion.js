// Foot: https://en.wikipedia.org/wiki/Foot_(unit)
const feetToMeter = (feet) => {
  return feet*0.3048;
}

const meterToFeet = (meter) => {
    return meter*(1/0.3048);
}

feetToMeter(50); //15.24
meterToFeet(50); //164.04199475065616