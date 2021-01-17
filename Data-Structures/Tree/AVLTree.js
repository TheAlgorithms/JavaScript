/**
 * Adelson-Velsky and Landis Tree
 * [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
 * [A video lecture](http://www.youtube.com/watch?v=TbvhGcf6UJU)
 */
'use strict'

/**
 * A utility class for comparator
 * A comparator is expected to have following structure
 *
 * comp(a, b) RETURN < 0 if a < b
 * RETURN > 0 if a > b
 * MUST RETURN 0 if a == b
 */
let utils;
(function (_utils) {
  function comparator () {
    return function (v1, v2) {
      if (v1 < v2) {
        return -1
      } else if (v2 < v1) {
        return 1
      } else {
        return 0
      }
    }
  }
  _utils.comparator = comparator
})(utils || (utils = {}))

/**
 * @constructor
 * A class for AVL Tree
 * @argument comp - A function used by AVL Tree For Comparison
 * If no argument is sent it uses utils.comparator
 */
const AVLTree = (function () {
  function _avl (comp) {
    /** @public compartor function */
    this._comp = undefined
    if (comp !== undefined) {
      this._comp = comp
    } else {
      this._comp = utils.comparator()
    }
    /** @public root of the AVL Tree */
    this.root = null
    /** @public number of elements in AVL Tree */
    this.size = 0
  }
  // creates new Node Object
  const Node = function (val) {
    this._val = val
    this._left = null
    this._right = null
    this._height = 1
  }
  // get height of a node
  const getH = function (node) {
    if (node == null) { return 0 }
    return node._height
  }
  // height difference or balance factor of a node
  const getHDiff = function (node) {
    if (node == null) { return 0 } else { return getH(node._left) - getH(node._right) }
  }
  // update height of a node based on children's heights
  const updateH = function (node) {
    if (node == null) {
      return
    }
    node._height = Math.max(getH(node._left), getH(node._right)) + 1
  }
  // rotations of AVL Tree
  const leftRotate = function (node) {
    const temp = node._right
    node._right = temp._left
    temp._left = node
    updateH(node)
    updateH(temp)
    return temp
  }
  const rightRotate = function (node) {
    const temp = node._left
    node._left = temp._right
    temp._right = node
    updateH(node)
    updateH(temp)
    return temp
  }
  // check if tree is balanced else balance it for insertion
  const insertBalance = function (node, _val, balanceFactor) {
    if (balanceFactor > 1 && _val < node._left._val) {
      return rightRotate(node) // Left Left Case
    } else if (balanceFactor < 1 && _val > node._right._val) {
      return leftRotate(node) // Right Right Case
    } else if (balanceFactor > 1 && _val > node._left._val) {
      node._left = leftRotate(node._left) // Left Right Case
      return rightRotate(node)
    }
    node._right = rightRotate(node._right)
    return leftRotate(node)
  }
  // check if tree is balanced after deletion
  const delBalance = function (node) {
    const balanceFactor1 = getHDiff(node)
    if (balanceFactor1 === 0 || balanceFactor1 === 1 || balanceFactor1 === -1) {
      return node
    }
    if (balanceFactor1 > 1) {
      if (getHDiff(node._left) >= 0) {
        return rightRotate(node) // Left Left
      }
      node._left = leftRotate(node._left)
      return rightRotate(node) // Left Right
    }
    if (getHDiff(node._right) > 0) {
      node._right = rightRotate(node._right)
      return leftRotate(node) // Right Left
    }
    return leftRotate(node) // Rigth Right
  }
  // implement avl tree insertion
  const insert = function (root, val, tree) {
    if (root == null) {
      tree.size++
      return new Node(val)
    } else if (tree._comp(root._val, val) < 0) {
      root._right = insert(root._right, val, tree)
    } else if (tree._comp(root._val, val) > 0) {
      root._left = insert(root._left, val, tree)
    } else {
      return root
    }
    updateH(root)
    const balanceFactor = getHDiff(root)
    if (balanceFactor === 0 || balanceFactor === 1 || balanceFactor === -1) {
      return root
    }
    return insertBalance(root, val, balanceFactor)
  }
  // delete a element
  const del = function (root, _val, tree) {
    if (root == null) {
      return root
    } else if (tree._comp(root._val, _val) === 0) { // key found case
      if (root._left === null && root._right === null) {
        root = null
        tree.size--
      } else if (root._left === null) {
        root = root._right
        tree.size--
      } else if (root._right === null) {
        root = root._left
        tree.size--
      } else {
        let temp = root._right
        while (temp._left != null) {
          temp = temp._left
        }
        root._val = temp._val
        root._right = del(root._right, temp._val, tree)
      }
    } else {
      if (tree._comp(root._val, _val) < 0) {
        root._right = del(root._right, _val, tree)
      } else {
        root._left = del(root._left, _val, tree)
      }
    }
    updateH(root)
    root = delBalance(root)
    return root
  }
  // search tree for a element
  const search = function (root, val, tree) {
    if (root == null) {
      return null
    } else if (tree._comp(root._val, val) === 0) {
      return root
    } else if (tree._comp(root._val, val) < 0) {
      return search(root._right, val, tree)
    }
    return search(root._left, val, tree)
  }

  /* Public Functions */
  /**
   * For Adding Elements to AVL Tree
   * @param {any} _val
   * Since in AVL Tree an element can only occur once so
   * if a element exists it return false
   * @returns {Boolean} element added or not
   */
  _avl.prototype.add = function (_val) {
    const prevSize = this.size
    this.root = insert(this.root, _val, this)
    if (this.size === prevSize) {
      return false
    }
    return true
  }
  /**
   * TO check is a particluar element exists or not
   * @param {any} _val
   * @returns {Boolean} exists or not
   */
  _avl.prototype.find = function (_val) {
    const temp = search(this.root, _val, this)
    if (temp != null) {
      return true
    }
    return false
  }
  /**
   *
   * @param {any} _val
   * It is possible that element doesn't exists in tree
   * in that case it return false
   * @returns {Boolean} if element was found and deleted
   */
  _avl.prototype.remove = function (_val) {
    const prevSize = this.size
    this.root = del(this.root, _val, this)
    if (prevSize === this.size) {
      return false
    }
    return true
  }
  return _avl
}());

/**
 * A Code for Testing the AVLTree
 */
(function test () {
  const newAVL = new AVLTree()
  const size = Math.floor(Math.random() * 1000000)
  let uniques = 0
  let i, temp, j
  const array = []
  for (i = 0; i < size; i++) {
    temp = Math.floor(Math.random() * Number.MAX_VALUE)
    if (newAVL.add(temp)) {
      uniques++
      array.push(temp)
    }
  }
  if (newAVL.size !== uniques) {
    throw new Error('elements not inserted properly')
  }
  const findTestSize = Math.floor(Math.random() * uniques)
  for (i = 0; i < findTestSize; i++) {
    j = Math.floor(Math.random() * uniques)
    if (!newAVL.find(array[j])) {
      throw new Error('inserted elements not found')
    }
  }
  const deleteTestSize = Math.floor(uniques * Math.random())
  for (i = 0; i < deleteTestSize; i++) {
    j = Math.floor(Math.random() * uniques)
    temp = array[j]
    if (newAVL.find(temp)) {
      if (!newAVL.remove(temp)) {
        throw new Error('delete not working properly')
      }
    }
  }
})()

module.exports = AVLTree
