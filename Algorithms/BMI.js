function BMI(mass, height) {
    let BMI = mass / height ** 2;
    console.log('Your Body Mass Index: ' + BMI);

    if (BMI < 17)
        console.log('Very underweight');
    else if (BMI < 18.5)
        console.log('Underweight');
    else if (BMI < 25)
        console.log('Normal weight');
    else if (BMI < 30)
        console.log('Overweight');
    else if (BMI < 35)
        console.log('obesity I');
    else if (BMI < 40)
        console.log('obesity II (Several)');
    else
        console.log('obesity III (Morbid)');
}

(function main() {
	BMI(63, 1.71);
	BMI(73, 1.72);
	BMI(83, 1.73);
	BMI(93, 1.74);
})();