function Problem6 (){
    let sumOfSquare = 0, squareOfSum = 0;

    for(let i = 1; i <= 100; i++){
        sumOfSquare += Math.pow(i, 2);
        squareOfSum += i
    }
    squareOfSum = Math.pow(squareOfSum, 2)
    
    return squareOfSum - sumOfSquare
}

console.log(Problem6())