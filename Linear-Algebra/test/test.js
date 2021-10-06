/*
    author: Christian Bender
    license: MIT-license

    This file contains the test-suite for the linear algebra library.
    The tests use javascript test-framework mocha
*/
/* eslint-disable */

import { LinearAlgebra } from "../src/la_lib"

var assert = require('assert')
var fs = require('fs')

// file is included here
// Tests goes here

// creating some vectors
describe('Create Vectors', function () {
  describe('#toString()', function () {
    it('should return a string representation', function () {
      assert.strictEqual((new LinearAlgebra.Vector(3, [1, 2, 3])).toString(), '(1,2,3)')
    })
  })
  describe('#unitBasisVector()', function () {
    it('should return a unit basis vector', function () {
      assert.strictEqual(LinearAlgebra.unitBasisVector(3, 1).toString(), '(0,1,0)')
    })
  })
})

// operations on it.
describe('Vector operations', function () {
  describe('#add()', function () {
    it('should return vector (2,4,6)', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 3])
      var y = new LinearAlgebra.Vector(3, [1, 2, 3])
      assert.strictEqual((x.add(y)).toString(), '(2,4,6)')
    })
  })
  describe('#sub()', function () {
    it('should return vector (0,0,0)', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 3])
      var y = new LinearAlgebra.Vector(3, [1, 2, 3])
      assert.strictEqual((x.sub(y)).toString(), '(0,0,0)')
    })
  })
  describe('#dot()', function () {
    it('should return the dot-product', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 3])
      var y = new LinearAlgebra.Vector(3, [5, 6, 7])
      assert.strictEqual(x.dot(y), 38)
    })
  })
  describe('#scalar()', function () {
    it('should return the scalar product', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 3])
      assert.strictEqual(x.scalar(2).toString(), '(2,4,6)')
    })
  })
  describe('#norm()', function () {
    it('should return the normalizes vector', function () {
      var x = new LinearAlgebra.Vector(4, [9, 0, 3, 1])
      var y = x.norm()
      assert.ok(Math.abs(y.component(0) - (9.0 / Math.sqrt(91))) <= 0.01)
    })
  })
  describe('#eulideanLength()', function () {
    it('should return the eulidean length of the vector', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 2])
      assert.ok(Math.abs(x.eulideanLength() - 3) <= 0.001)
    })
  })
  describe('#size()', function () {
    it('should return the size (not eulidean length!) of the vector', function () {
      var x = LinearAlgebra.randomVectorInt(10, 1, 5)
      assert.strictEqual(x.size(), 10)
    })
  })
  describe('#equal()', function () {
    it('should compares two vectors', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 2])
      var y = new LinearAlgebra.Vector(3, [1, 2, 3])
      assert.ok(x.equal(x))
      assert.ok(!x.equal(y))
    })
  })
})

describe('Methods on vectors', function () {
  describe('#component()', function () {
    it('should return the specified component', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 2])
      assert.strictEqual(x.component(1), 2)
    })
  })
  describe('#changeComponent()', function () {
    it('should return the changed vector', function () {
      var x = new LinearAlgebra.Vector(3, [1, 2, 2])
      x.changeComponent(1, 5)
      assert.strictEqual(x.toString(), '(1,5,2)')
    })
  })
  describe('#toString()', function () {
    it('should return a string representation of the vector', function () {
      var x = new LinearAlgebra.Vector(4, [9, 0, 3, 1])
      assert.strictEqual(x.toString(), '(9,0,3,1)')
    })
  })
})

describe('class Matrix', function () {
  describe('#component()', function () {
    it('should return the specified component', function () {
      var A = new LinearAlgebra.Matrix(2, 2)
      assert.strictEqual(A.component(0, 1), 0)
      var B = new LinearAlgebra.Matrix(2, 2, [
        [1, 2],
        [3, 4]
      ])
      assert.strictEqual(B.component(1, 0), 3)
    })
  })
  describe('#toString()', function () {
    it('should return a string representation of the matrix', function () {
      var A = new LinearAlgebra.Matrix(2, 2, [
        [1, 2],
        [3, 4]
      ])
      assert.strictEqual(A.toString(), '|1,2|\n|3,4|')
    })
  })
  describe('#dimension()', function () {
    it('should return the dimension of the matrix as number array', function () {
      var A = new LinearAlgebra.Matrix(3, 2, [
        [1, 2],
        [3, 4],
        [5, 6]
      ])
      assert.strictEqual(A.dimension()[0], 3)
      assert.strictEqual(A.dimension()[1], 2)
    })
  })
  describe('#changeComponent()', function () {
    it('should change the specified component of the matrix', function () {
      var A = new LinearAlgebra.Matrix(3, 2, [
        [1, 2],
        [3, 4],
        [5, 6]
      ])
      A.changeComponent(1, 0, 5)
      assert.strictEqual(A.component(1, 0), 5)
    })
  })
  describe('#equal()', function () {
    it('should compares the matrices', function () {
      var A = new LinearAlgebra.Matrix(3, 2, [
        [1, 2],
        [3, 4],
        [5, 6]
      ])
      var B = new LinearAlgebra.Matrix(3, 2, [
        [1, 2],
        [3, 4],
        [5, 6]
      ])
      var C = new LinearAlgebra.Matrix(2, 2, [
        [1, 2],
        [3, 4]
      ])
      var D = new LinearAlgebra.Matrix(2, 2, [
        [1, 2],
        [5, 4]
      ])
      assert.ok(A.equal(B))
      assert.ok(!A.equal(C))
      assert.ok(!C.equal(D))
    })
  })
  describe('#add()', function () {
    it('should return the result of the matrix addition', function () {
      var A = new LinearAlgebra.Matrix(3, 2, [
        [1, 2],
        [3, 4],
        [5, 6]
      ])
      var B = new LinearAlgebra.Matrix(3, 2, [
        [1, 2],
        [3, 4],
        [5, 6]
      ])
      var C = A.add(B)
      assert.strictEqual(C.component(1, 0), 6)
      assert.strictEqual(C.component(1, 1), 8)
      assert.strictEqual(C.component(0, 0), 2)
    })
  })
  describe('#scalar()', function () {
    it('should return the result of the matrix-scalar multiplication', function () {
      var A = new LinearAlgebra.Matrix(3, 2, [
        [1, 2],
        [3, 4],
        [5, 6]
      ])
      var B = A.scalar(2)
      var C = new LinearAlgebra.Matrix(3, 2, [
        [2, 4],
        [6, 8],
        [10, 12]
      ])
      assert.ok(B.equal(C))
    })
  })
})