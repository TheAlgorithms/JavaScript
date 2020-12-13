//  Different types of Iterations in JS

//  ForEach loop
let colors = ['red', 'yellow', 'green', 'brown'];

colors.forEach(color => {
	console.log(color)
})

//  For loop
for (let i = 0; i < 5; i++) {
	//  This will start from 0 all the way to 5
	console.log(i)
}

//  While loop
let i = 5;
while (i !== 0) {
	//  This will iterate until the condition given above is wrong
	console.log(i)
	i = i - 1;
}


let array = ['apple', 'ice-cream', 'orange', 'tea', 'coffee'];

//  Filter function 
//  Filter will iterate the array and will return a new array according to the condition applied
let filteredArray = array.filter(value => value != 'coffee');
console.log(filteredArray)

//  Map function
//  Map funtion will iterate the whole array and you can perform some operations in this one or can return some DOM element
array.map(value => {
	//  Some Operations
	console.log(value)
	//  return value
	//  or
	//  return <li>{value}</li>
})
