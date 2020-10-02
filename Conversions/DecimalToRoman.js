function decimalToRoaman (decimalNumber) {
    let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    let romanNumber = '';

    for (let i = 0; i < decimals.length; i++) {
        while (decimalNumber > decimals[i]) {
            romanNumber += romans[i];
            decimalNumber -= decimals[i];
        }
    }

    return romanNumber;
}

