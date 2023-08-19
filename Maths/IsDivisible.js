// Checks if a number is divisible by another number.
function checkFiniteNumbers(num1, num2) {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    throw new TypeError('Expected valid real numbers');
  }
  // Se ambos os números forem finitos, você pode fazer alguma operação aqui
  // ou simplesmente retornar true ou executar qualquer outra ação desejada.
  return true; // Por exemplo, aqui estamos retornando true se os números forem finitos.
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

// isDivisible(10, 5) // returns true
// isDivisible(123498175, 5) // returns true
// isDivisible(99, 5) // returns false
