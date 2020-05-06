/*
    author: Christian Bender
    license: MIT-license
    
    The namespace LinearAlgebra contains useful classes and functions for dealing with
    linear algebra under JavaScript.
*/

namespace LinearAlgebra {
    /*
        class: Vector
        This class represents a vector of arbitrary size and operations on it.
    */
    export class Vector {

        // the vector components
        private components: number[];

        // constructor 
        constructor(N: number, comps: number[] = []) {
            this.components = new Array(N);
            if (comps.length == 0) { // creates a zero vector of size N
                for (var i = 0; i < N; i++) {
                    this.components[i] = 0.0;
                }
            } else { // assigns the components
                if (N == comps.length) {
                    this.components = comps;
                } else {
                    throw "Vector: invalide size!";
                }

            }
        } // end of constructor

        // returns the size of this vector. 
        // not the eulidean length!
        size(): number {
            return this.components.length;
        }

        // computes the eulidean length.
        eulideanLength(): number {
            var sum: number = 0;
            for (var i = 0; i < this.components.length; i++) {
                sum += this.components[i] * this.components[i];
            }
            return Math.sqrt(sum);
        }

        // getter for the components of the vector.
        // returns a specified component (index)
        component(index: number): number {
            return this.components[index];
        }

        // setter for a specified component of this vector.
        changeComponent(index: number, value: number): void {
            if (index >= 0 && index < this.components.length) {
                this.components[index] = value;
            } else { // error case
                throw "changeComponent: index out of bounds!";
            }
        }

        // vector addition
        add(other: Vector): Vector {
            if (this.size() == other.size()) {
                var SIZE = this.size();
                var ans: Vector = new Vector(SIZE);
                for (var i = 0; i < SIZE; i++) {
                    ans.changeComponent(i, (this.components[i] + other.component(i)));
                }
                return ans;
            } else {
                throw "add: vector must have same size!";
            }
        }

        // vector subtraction
        sub(other: Vector): Vector {
            if (this.size() == other.size()) {
                var SIZE = this.size();
                var ans: Vector = new Vector(SIZE);
                for (var i = 0; i < SIZE; i++) {
                    ans.changeComponent(i, (this.components[i] - other.component(i)));
                }
                return ans;
            } else { // error case
                throw "add: vector must have same size!";
            }
        }

        // dot-product
        dot(other: Vector): number {
            var sum: number = 0;
            if (other.size() == this.size()) {
                const SIZE: number = other.size();
                for (var i = 0; i < SIZE; i++) {
                    sum += this.components[i] * other.component(i);
                }
                return sum;
            } else { // error case
                throw "dot: vectors must have same size!";
            }
        }

        // scalar multiplication
        scalar(s: number): Vector {
            const SIZE: number = this.size();
            var ans: Vector = new Vector(SIZE);
            for (var i = 0; i < SIZE; i++) {
                ans.changeComponent(i, (this.components[i] * s));
            }
            return ans;
        }

        // returns a string representation of this vector.
        toString(): string {
            var ans: string = "(";
            var SIZE: number = this.components.length;
            for (var i = 0; i < SIZE; i++) {
                if (i < SIZE - 1) {
                    ans += this.components[i] + ",";
                } else {
                    ans += this.components[i] + ")";
                }
            }
            return ans;
        }

        // converts this vector in a unit basis vector and returns it.
        // the One is on position 'pos'
        createUnitBasis(pos: number): Vector {
            if (pos >= 0 && pos < this.components.length) {
                for (var i = 0; i < this.components.length; i++) {
                    if (i == pos) {
                        this.components[i] = 1.0;
                    } else {
                        this.components[i] = 0.0;
                    }
                }
            } else { // error case
                throw "createUnitBasis: index out of bounds";
            }
            return this;
        }

        // normalizes this vector and returns it.
        norm(): Vector {
            const SIZE: number = this.size();
            var quotient = 1.0 / this.eulideanLength();
            for (var i = 0; i < SIZE; i++) {
                this.components[i] = this.components[i] * quotient;
            }
            return this;
        }

        // returns true if the vectors are equal otherwise false.
        equal(other: Vector): boolean {
            var ans: boolean = true;
            const SIZE: number = this.size();
            const EPSILON: number = 0.001;
            if (SIZE == other.size()) {
                for (var i = 0; i < SIZE; i++) {
                    if (Math.abs(this.components[i] - other.component(i)) > EPSILON) {
                        ans = false;
                    }
                }
            } else {
                ans = false;
            }
            return ans;
        }

    } // end of class Vector

    // -------------- global functions ---------------------------------

    // returns a unit basis vector of size N with a One on position 'pos'
    export function unitBasisVector(N: number, pos: number): Vector {
        var ans = new Vector(N);
        for (var i = 0; i < N; i++) {
            if (i == pos) {
                ans.changeComponent(i, 1.0);
            } else {
                ans.changeComponent(i, 0);
            }
        }
        return ans;
    }

    // returns a random vector with integer components (between 'a' and 'b') of size N.
    export function randomVectorInt(N: number, a: number, b: number): Vector {
        var ans: Vector = new Vector(N);
        for (var i = 0; i < N; i++) {
            ans.changeComponent(i, (Math.floor((Math.random() * b) + a)));
        }
        return ans;
    }

    // returns a random vector with floating point components (between 'a' and 'b') of size N.
    export function randomVectorFloat(N: number, a: number, b: number): Vector {
        var ans: Vector = new Vector(N);
        for (var i = 0; i < N; i++) {
            ans.changeComponent(i, ((Math.random() * b) + a));
        }
        return ans;
    }

    // ------------------ end of global functions -----------------------------


    /*
        class: Matrix
        This class represents a matrix of arbitrary size and operations on it.
    */
    export class Matrix {

        // private field that contains the actual matrix.
        private matrix: number[][];

        // private field for the dimension of the matrix
        private rows: number;
        private cols: number;

        // constructor for zero-matrix or fix number matrix.
        constructor(row: number, col: number, comps: number[][] = []) {
            if (comps.length == 0) { // zero-matrix
                this.matrix = new Array();
                var rowVector: number[] = new Array();
                for (var i = 0; i < row; i++) {
                    for (var j = 0; j < col; j++) {
                        rowVector[j] = 0;
                    }
                    this.matrix[i] = rowVector;
                    rowVector = new Array();
                }
            } else { // fix number matrix
                this.matrix = comps;
            }
            this.rows = row;
            this.cols = col;
        }

        // returns the specified component.
        component(x: number, y: number): number {
            if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
                return this.matrix[x][y];
            } else { // error case
                throw new Error("component: index out of bounds");
            }
        }

        // changes the specified component with value 'value'.
        changeComponent(x: number, y: number, value: number): void {
            if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
                this.matrix[x][y] = value;
            } else {
                throw new Error("changeComponent: index out of bounds");
            }
        }

        // returns a string representation of this matrix.
        toString(): string {
            var ans: string = "";
            for (var i = 0; i < this.rows; i++) {
                ans += "|";
                for (var j = 0; j < this.cols; j++) {
                    if (j < this.cols - 1) {
                        ans += this.matrix[i][j] + ",";
                    } else {
                        if (i < this.rows - 1) {
                            ans += this.matrix[i][j] + "|\n";
                        } else {
                            ans += this.matrix[i][j] + "|";
                        }

                    }
                }
            }
            return ans;
        }

        // returns the dimension rows x cols as number array
        dimension(): number[] {
            var ans: number[] = new Array();
            ans[0] = this.rows;
            ans[1] = this.cols;
            return ans;
        }

        // matrix addition. returns the result.
        add(other: Matrix): Matrix {
            if (this.rows == other.dimension()[0]
                && this.cols == other.dimension()[1]) {
                var ans = new Matrix(this.rows, this.cols);
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j < this.cols; j++) {
                        ans.changeComponent(i, j, (this.matrix[i][j] + other.component(i, j)));
                    }
                }
                return ans;
            } else {
                throw new Error("add: matrices must have same dimension!");
            }
        }

        // returns true if the matrices are equal, otherwise false. 
        equal(other: Matrix): boolean {
            var ans: boolean = true;
            const EPSILON: number = 0.001;
            if (this.rows == other.dimension()[0]
                && this.cols == other.dimension()[1]) {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j < this.cols; j++) {
                        if (Math.abs(this.matrix[i][j] - other.component(i, j)) > EPSILON) {
                            ans = false;
                        }
                    }
                }
            } else {
                ans = false;
            }
            return ans;
        }

        // matrix-scalar multiplication
        scalar(c: number): Matrix {
            var ans = new Matrix(this.rows, this.cols);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.cols; j++) {
                    ans.changeComponent(i, j, (this.matrix[i][j] * c));
                }
            }
            return ans;
        }

    } // end of class Matrix
} // end of namespace LinearAlgebra


