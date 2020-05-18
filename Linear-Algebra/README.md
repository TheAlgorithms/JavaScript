# Linear algebra library for JavaScript  

This library contains some useful classes and functions for dealing with linear algebra in JavaScript.  
The library was orginal written in **TypeScript** and then compiles into pure JavaScript.  

---

## Overview  

- class Vector : This class represents a vector of arbitray size and operations on it.  
    - constructor Vector(N) : creates a zero vector of size N   
    - constructor Vector(N, components) : creates a vector of size N with the given components.   
    - createUnitBasis(pos) : converts this vector in a unit basis vector and returns it.  
    - component(pos) : returns the specified component (indexing at 0)  
    - changeComponent(pos, value) : change the specified component.  
    - toString() : returns a string representation of this vector.  
    - size() : returns the size of the vector. (not the eulidean length!)  
    - eulideanLength() : computes the eulidean length of this vector.  
    - add(other) : vector addition, returns the rersult.  
    - sub(other) : vector subtraction, returns the rersult.  
    - dot(other) : computes the dot-product and returns it.  
    - scalar(s)  : scalar (s) multiplication. returns the result.  
    - norm() : normalizes this vector and returns it.  
    - equal(other) : returns true if the vectors are equal, otherwise false.  

- function unitBasisVector(N,pos) : returns a unit basis vector of size N with a One on position 'pos'  
- function randomVectorInt(N,a,b) : returns a random vector with integer components (between 'a' and 'b') of size N.  
- function randomVectorFloat(N,a,b) : returns a random vector with floating point components (between 'a' and 'b') of size N.    

- class Matrix : This class represents a matrix of arbitrary size and operations on it.  
    - constructor(rows, cols) : creates a zero matrix of dimension rows x cols.  
    - constructor(rows, cols, components) : creates a matrix with fix numbers of dimension rows x cols.  
    - component(x,y) : returns the specified component.  
    - changeComponent(x,y,value) : changes the specified component with the new value 'value'.  
    - toString() : returns a string representation of this matrix.  
    - dimension() : returns the dimension of this matrix as number arras [rows,cols].  
    - add(other) : returns the result of the matrix addition.  
    - equal(other) : returns true if the matrices are equal, otherwise false.  
    - scalar(c) : returns the result of the matrix-scalar multiplication.  
---

## Documentation  

The module is well documented in its source code. Look in the TypeScript file ```la_lib.ts```.  

---

## Usage  

You will find the library in the **src** directory its called ```la_lib.js```. You simply need to  
include this library in your project **(you don't install anything)**. After that:  

```js
    var x = LinearAlgebra.Vector(...);
```  

The namespace LinearAlgebra contains useful classes and functions for dealing with linear algebra under JavaScript.  

Some examples:  

```js
// ---------------------------- Examples ------------------------------------------

// creates vectors 
var x = new LinearAlgebra.Vector(5, [1, 2, 3, 4, 5]);
var y = new LinearAlgebra.Vector(5, [1, 2, 3, 4, 5]);

// prints size of the vector
console.log(x.size()); // ==> 5

// changes the 2-th component with 7
//x.changeComponent(2,7);

// print the 2-th component.
console.log(x.component(2)); // ==> 3

// prints the full vector as string.
console.log(x.toString()); // ==> (1,2,3,4,5)

// vector addition
console.log(x.add(y).toString()); // ==> (2,3,6,8,10)

//console.log(x.createUnitBasis(1).toString());

// computes the dot-product
console.log(x.dot(y)); // ==> 55

// computes and prints the scalar-product
console.log(x.scalar(5).toString()); // ==> (5,10,15,20,25)

// creates a unit basis vector
console.log(LinearAlgebra.unitBasisVector(3, 0).toString()); // ==> (1,0,0)

// creates random vectors
console.log(LinearAlgebra.randomVectorInt(3, 0, 5).toString());
console.log(LinearAlgebra.randomVectorFloat(3, 0, 5).toString());
```  

---

## Tests  

Go in the directory of the project and type in:  
```npm install```  
```npm test```  
The test-suite use the JavaScript test-framework **mocha**.  

---

## Contributing  

You can contribute to this project. Feel free and pull request some new features or documention.   
**TODO:** Global functions for special matrices.  
**TODO:** Documention of the classes and functions.  