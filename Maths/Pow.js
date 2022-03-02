const powOn = (base, power) => {
  if (power < 0) {
    base = 1 / base
    power = -power
  }
  
  let result = 1

  while (power--) { // Break the execution while the power will 0 
    result *= base
  }

  return result
}

export { powOn }
