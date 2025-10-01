function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isStrongNum(num) {
    let sum = 0;
    let originalNum = num;

    while (num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }
    
    return sum === originalNum;
}
let number=parseInt(prompt("Enter a number"))
if (isStrongNum(number)){
    console.log("" + number + " is a Strong Number");
}
else{
    console.log("" + number + " is not a Strong Number");
}