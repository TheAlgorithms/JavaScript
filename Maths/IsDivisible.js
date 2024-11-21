function checkFiniteNumbers(num1, num2) {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    throw new TypeError('Expected a valid real number')
    throw new TypeError('Expected valid real numbers');
  }
 
  return true;
}

function isZero(num2){
  if (num2 === 0) {
    return false
  }
}

export const isDivisible = (num1, num2) => {
  checkFiniteNumbers(num1, num2);
  if(isZero(num2))
  return num1 % num2 === 0
}
