/*
    author: Christian Bender
    license: MIT-license

    The namespace LinearAlgebra contains useful classes and functions for dealing with
    linear algebra under JavaScript.
*/
var LinearAlgebra;
(function (LinearAlgebra) {
  /*
        class: Vector
        This class represents a vector of arbitrary size and operations on it.
    */
  var Vector = /** @class */ (function () {
    // constructor
    function Vector (N, comps) {
      if (comps === undefined) {
        comps = []
      }
      this.components = new Array(N)
      if (comps.length === 0) {
        for (var i = 0; i < N; i++) {
          this.components[i] = 0.0
        }
      } else {
        if (N === comps.length) {
          this.components = comps
        } else {
          throw new Error('Vector: invalide size!')
        }
      }
    } // end of constructor
    // returns the size of this vector.
    // not the eulidean length!
    Vector.prototype.size = function () {
      return this.components.length
    }
    // computes the eulidean length.
    Vector.prototype.eulideanLength = function () {
      var sum = 0
      for (var i = 0; i < this.components.length; i++) {
        sum += this.components[i] * this.components[i]
      }
      return Math.sqrt(sum)
    }
    // getter for the components of the vector.
    // returns a specified component (index)
    Vector.prototype.component = function (index) {
      return this.components[index]
    }
    // setter for a specified component of this vector.
    Vector.prototype.changeComponent = function (index, value) {
      if (index >= 0 && index < this.components.length) {
        this.components[index] = value
      } else {
        throw new Error('changeComponent: index out of bounds!')
      }
    }
    // vector addition
    Vector.prototype.add = function (other) {
      if (this.size() === other.size()) {
        var SIZE = this.size()
        var ans = new Vector(SIZE)
        for (var i = 0; i < SIZE; i++) {
          ans.changeComponent(i, (this.components[i] + other.component(i)))
        }
        return ans
      } else {
        throw new Error('add: vector must have same size!')
      }
    }
    // vector subtraction
    Vector.prototype.sub = function (other) {
      if (this.size() === other.size()) {
        var SIZE = this.size()
        var ans = new Vector(SIZE)
        for (var i = 0; i < SIZE; i++) {
          ans.changeComponent(i, (this.components[i] - other.component(i)))
        }
        return ans
      } else {
        throw new Error('add: vector must have same size!')
      }
    }
    // dot-product
    Vector.prototype.dot = function (other) {
      var sum = 0
      if (other.size() === this.size()) {
        var SIZE = other.size()
        for (var i = 0; i < SIZE; i++) {
          sum += this.components[i] * other.component(i)
        }
        return sum
      } else {
        throw new Error('dot: vectors must have same size!')
      }
    }
    // scalar multiplication
    Vector.prototype.scalar = function (s) {
      var SIZE = this.size()
      var ans = new Vector(SIZE)
      for (var i = 0; i < SIZE; i++) {
        ans.changeComponent(i, (this.components[i] * s))
      }
      return ans
    }
    // returns a string representation of this vector.
    Vector.prototype.toString = function () {
      var ans = '('
      var SIZE = this.components.length
      for (var i = 0; i < SIZE; i++) {
        if (i < SIZE - 1) {
          ans += this.components[i] + ','
        } else {
          ans += this.components[i] + ')'
        }
      }
      return ans
    }
    // converts this vector in a unit basis vector and returns it.
    // the One is on position 'pos'
    Vector.prototype.createUnitBasis = function (pos) {
      if (pos >= 0 && pos < this.components.length) {
        for (var i = 0; i < this.components.length; i++) {
          if (i === pos) {
            this.components[i] = 1.0
          } else {
            this.components[i] = 0.0
          }
        }
      } else {
        throw new Error('createUnitBasis: index out of bounds')
      }
      return this
    }
    // normalizes this vector and returns it.
    Vector.prototype.norm = function () {
      var SIZE = this.size()
      var quotient = 1.0 / this.eulideanLength()
      for (var i = 0; i < SIZE; i++) {
        this.components[i] = this.components[i] * quotient
      }
      return this
    }
    // returns true if the vectors are equal otherwise false.
    Vector.prototype.equal = function (other) {
      var ans = true
      var SIZE = this.size()
      var EPSILON = 0.001
      if (SIZE === other.size()) {
        for (var i = 0; i < SIZE; i++) {
          if (Math.abs(this.components[i] - other.component(i)) > EPSILON) {
            ans = false
          }
        }
      } else {
        ans = false
      }
      return ans
    }
    return Vector
  }()) // end of class Vector
  LinearAlgebra.Vector = Vector
  // -------------- global functions ---------------------------------
  // returns a unit basis vector of size N with a One on position 'pos'
  function unitBasisVector (N, pos) {
    var ans = new Vector(N)
    for (var i = 0; i < N; i++) {
      if (i === pos) {
        ans.changeComponent(i, 1.0)
      } else {
        ans.changeComponent(i, 0)
      }
    }
    return ans
  }
  LinearAlgebra.unitBasisVector = unitBasisVector
  // returns a random vector with integer components (between 'a' and 'b') of size N.
  function randomVectorInt (N, a, b) {
    var ans = new Vector(N)
    for (var i = 0; i < N; i++) {
      ans.changeComponent(i, (Math.floor((Math.random() * b) + a)))
    }
    return ans
  }
  LinearAlgebra.randomVectorInt = randomVectorInt
  // returns a random vector with floating point components (between 'a' and 'b') of size N.
  function randomVectorFloat (N, a, b) {
    var ans = new Vector(N)
    for (var i = 0; i < N; i++) {
      ans.changeComponent(i, ((Math.random() * b) + a))
    }
    return ans
  }
  LinearAlgebra.randomVectorFloat = randomVectorFloat
  // ------------------ end of global functions -----------------------------
  /*
        class: Matrix
        This class represents a matrix of arbitrary size and operations on it.
    */
  var Matrix = /** @class */ (function () {
    // constructor for zero-matrix or fix number matrix.
    function Matrix (row, col, comps) {
      if (comps === undefined) {
        comps = []
      }
      if (comps.length === 0) {
        this.matrix = []
        var rowVector = []
        for (var i = 0; i < row; i++) {
          for (var j = 0; j < col; j++) {
            rowVector[j] = 0
          }
          this.matrix[i] = rowVector
          rowVector = []
        }
      } else {
        this.matrix = comps
      }
      this.rows = row
      this.cols = col
    }
    // returns the specified component.
    Matrix.prototype.component = function (x, y) {
      if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
        return this.matrix[x][y]
      } else {
        throw new Error('component: index out of bounds')
      }
    }
    // changes the specified component with value 'value'.
    Matrix.prototype.changeComponent = function (x, y, value) {
      if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
        this.matrix[x][y] = value
      } else {
        throw new Error('changeComponent: index out of bounds')
      }
    }
    // returns a string representation of this matrix.
    Matrix.prototype.toString = function () {
      var ans = ''
      for (var i = 0; i < this.rows; i++) {
        ans += '|'
        for (var j = 0; j < this.cols; j++) {
          if (j < this.cols - 1) {
            ans += this.matrix[i][j] + ','
          } else {
            if (i < this.rows - 1) {
              ans += this.matrix[i][j] + '|\n'
            } else {
              ans += this.matrix[i][j] + '|'
            }
          }
        }
      }
      return ans
    }
    // returns the dimension rows x cols as number array
    Matrix.prototype.dimension = function () {
      var ans = []
      ans[0] = this.rows
      ans[1] = this.cols
      return ans
    }
    // matrix addition. returns the result.
    Matrix.prototype.add = function (other) {
      if (this.rows === other.dimension()[0] &&
        this.cols === other.dimension()[1]) {
        var ans = new Matrix(this.rows, this.cols)
        for (var i = 0; i < this.rows; i++) {
          for (var j = 0; j < this.cols; j++) {
            ans.changeComponent(i, j, (this.matrix[i][j] + other.component(i, j)))
          }
        }
        return ans
      } else {
        throw new Error('add: matrices must have same dimension!')
      }
    }
    // returns true if the matrices are equal, otherwise false.
    Matrix.prototype.equal = function (other) {
      var ans = true
      var EPSILON = 0.001
      if (this.rows === other.dimension()[0] &&
        this.cols === other.dimension()[1]) {
        for (var i = 0; i < this.rows; i++) {
          for (var j = 0; j < this.cols; j++) {
            if (Math.abs(this.matrix[i][j] - other.component(i, j)) > EPSILON) {
              ans = false
            }
          }
        }
      } else {
        ans = false
      }
      return ans
    }
    // matrix-scalar multiplication
    Matrix.prototype.scalar = function (c) {
      var ans = new Matrix(this.rows, this.cols)
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          ans.changeComponent(i, j, (this.matrix[i][j] * c))
        }
      }
      return ans
    }
    return Matrix
  }()) // end of class Matrix
  LinearAlgebra.Matrix = Matrix
})(LinearAlgebra || (LinearAlgebra = {})) // end of namespace LinearAlgebra
