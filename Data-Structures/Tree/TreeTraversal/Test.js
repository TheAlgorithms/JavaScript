
const program = require('./program');
const chai = require('chai');

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

it('Test Case #1', function () {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.right = new BST(22);
  chai.expect(program.inOrderTraverse(root, [])).to.deep.equal([1, 2, 5, 5, 10, 15, 22]);
  chai.expect(program.preOrderTraverse(root, [])).to.deep.equal([10, 5, 2, 1, 5, 15, 22]);
  chai.expect(program.postOrderTraverse(root, [])).to.deep.equal([1, 2, 5, 5, 22, 15, 10]);
});
