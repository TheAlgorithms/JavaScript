import { UnionFind } from '../UnionFind'

var uf = new UnionFind(5);
	it("should have a constructor UnionFind(NUM_OF_NODES)", function() {
		(uf instanceof UnionFind).should.be.truthy;
	})
	it("should expose .size()", function() {
		uf.size().should.equal(5);
	})
	it("should do .union(num1, num2)", function() {
		uf.union(1, 2);
		uf.union(3, 4);
		uf.union(0, 4);

		uf.connected(1, 2).should.be.truthy;
		uf.connected(1, 2).should.be.truthy;

		uf.connected(3, 4).should.be.truthy;
		uf.connected(3, 0).should.be.truthy;
		uf.connected(4, 0).should.be.truthy;

		uf.connected(1, 3).should.be.falsy;
		uf.connected(1, 4).should.be.falsy;
		uf.connected(1, 0).should.be.falsy;
		uf.connected(2, 3).should.be.falsy;
		uf.connected(2, 4).should.be.falsy;
		uf.connected(2, 0).should.be.falsy;
	})
	it(".count(), should return the number of disparate groups", function() {
		uf.count().should.equal(2);
	})
	it("should check if two components are connected, .connected(num1, num2)", function() {
		uf.connected(1, 2).should.be.truthy;
		uf.connected(1, 3).should.be.falsy;
	})
	it("should find the root of the tree in which the given element lives, .find(num)", function() {
		uf.find(1).should.equal(1);
		uf.find(2).should.equal(1);
		uf.find(3).should.equal(3);
		uf.find(4).should.equal(3);
		uf.find(0).should.equal(3);
	})
	describe("weighted", function() {
		it("should always change the id of the smaller tree and preserve the id of the larger one", function() {
			//We have two sets now s1 = {1, 2} and s2 = {3, 4, 0}
			uf.union(2, 3);
			uf.count().should.equal(1);
			uf.find(0).should.equal(3);
			uf.find(1).should.equal(3);
			uf.find(2).should.equal(3);
			uf.find(3).should.equal(3);
			uf.find(4).should.equal(3);
		})
	})
})
describe("Index out of bounds", function() {
	it("should throw an error on union of a number out of bounds", function() {
		var uf = new UnionFind(5);
		(function() {
			uf.union(1, 5);
		}).should.throw(Error);
	})
})
describe("key", function() {
	it("should accept a key that can map to array index", function() {
		var key = function(a) { return a - 1; };
		var uf = new UnionFind(5, key);
		uf.size().should.equal(5);
		uf.union(4, 5);
		(function() {
			uf.union(5, 6);
		}).should.throw(Error);
		uf.count().should.equal(4);
		uf.count().should.equal(4);
	})
})

/*
test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
  expect(indexNumber).toBe(2)
})
test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)
  expect(indexNumber).toBe(7)
})
test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)
  expect(indexNumber).toBe(-1)
})
test('should return the index of a number in an array of numbers:', () => {
  const indexNumber = ternarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12)
  expect(indexNumber).toBe(-1)
})
test('should return the index of a string in an array of strings:', () => {
  const indexNumber = ternarySearchRecursive(['Ali', 'Cathrynli', 'Josuke', 'Thomas'], 'Cathrynli')
  expect(indexNumber).toBe(1)
})
test('should return the index of a string in an array of strings:', () => {
  const indexNumber = ternarySearchRecursive(['Ali', 'Cathrynli', 'Josuke', 'Thomas'], 'Josuke')
  expect(indexNumber).toBe(2)
})
test('should return the index of a string in an array of strings:', () => {
  const indexNumber = ternarySearchRecursive(['Ali', 'Cathrynli', 'Josuke', 'Thomas'], 'Angela')
  expect(indexNumber).toBe(-1)
})
*/
