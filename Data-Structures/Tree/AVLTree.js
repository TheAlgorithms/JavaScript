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
      if (v1 < v2) return -1
      if (v2 < v1) return 1
      return 0
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
    /** @public comparator function */
    this._comp = undefined
    this._comp = comp !== undefined ? comp : utils.comparator()

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
  const getHeight = function (node) {
    if (node == null) { return 0 }
    return node._height
  }

  // height difference or balance factor of a node
  const getHeightDifference = function (node) {
    return node == null ? 0 : getHeight(node._left) - getHeight(node._right)
  }

  // update height of a node based on children's heights
  const updateHeight = function (node) {
    if (node == null) { return }
    node._height = Math.max(getHeight(node._left), getHeight(node._right)) + 1
  }

  // Helper: To check if the balanceFactor is valid
  const isValidBalanceFactor = (balanceFactor) => [0, 1, -1].includes(balanceFactor)

  // rotations of AVL Tree
  const leftRotate = function (node) {
    const temp = node._right
    node._right = temp._left
    temp._left = node
    updateHeight(node)
    updateHeight(temp)
    return temp
  }
  const rightRotate = function (node) {
    const temp = node._left
    node._left = temp._right
    temp._right = node
    updateHeight(node)
    updateHeight(temp)
    return temp
  }

  // check if tree is balanced else balance it for insertion
  const insertBalance = function (node, _val, balanceFactor, tree) {
    if (balanceFactor > 1 && tree._comp(_val, node._left._val) < 0) {
      return rightRotate(node) // Left Left Case
    }
    if (balanceFactor < 1 && tree._comp(_val, node._right._val) > 0) {
      return leftRotate(node) // Right Right Case
    }
    if (balanceFactor > 1 && tree._comp(_val, node._left._val) > 0) {
      node._left = leftRotate(node._left) // Left Right Case
      return rightRotate(node)
    }
    node._right = rightRotate(node._right)
    return leftRotate(node)
  }

  // check if tree is balanced after deletion
  const delBalance = function (node) {
    const balanceFactor1 = getHeightDifference(node)
    if (isValidBalanceFactor(balanceFactor1)) {
      return node
    }
    if (balanceFactor1 > 1) {
      if (getHeightDifference(node._left) >= 0) {
        return rightRotate(node) // Left Left
      }
      node._left = leftRotate(node._left)
      return rightRotate(node) // Left Right
    }
    if (getHeightDifference(node._right) > 0) {
      node._right = rightRotate(node._right)
      return leftRotate(node) // Right Left
    }
    return leftRotate(node) // Right Right
  }

  // implement avl tree insertion
  const insert = function (root, val, tree) {
    if (root == null) {
      tree.size++
      return new Node(val)
    }
    if (tree._comp(root._val, val) < 0) {
      root._right = insert(root._right, val, tree)
    } else if (tree._comp(root._val, val) > 0) {
      root._left = insert(root._left, val, tree)
    } else {
      return root
    }
    updateHeight(root)
    const balanceFactor = getHeightDifference(root)
    return isValidBalanceFactor(balanceFactor) ? root : insertBalance(root, val, balanceFactor, tree)
  }

  // delete am element
  const deleteElement = function (root, _val, tree) {
    if (root == null) { return root }
    if (tree._comp(root._val, _val) === 0) { // key found case
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
        root._right = deleteElement(root._right, temp._val, tree)
      }
    } else {
      if (tree._comp(root._val, _val) < 0) {
        root._right = deleteElement(root._right, _val, tree)
      } else {
        root._left = deleteElement(root._left, _val, tree)
      }
    }
    updateHeight(root)
    root = delBalance(root)
    return root
  }
  // search tree for a element
  const searchAVLTree = function (root, val, tree) {
    if (root == null) { return null }
    if (tree._comp(root._val, val) === 0) {
      return root
    }
    if (tree._comp(root._val, val) < 0) {
      return searchAVLTree(root._right, val, tree)
    }
    return searchAVLTree(root._left, val, tree)
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
    return this.size !== prevSize
  }
  /**
   * TO check is a particular element exists or not
   * @param {any} _val
   * @returns {Boolean} exists or not
   */
  _avl.prototype.find = function (_val) {
    const temp = searchAVLTree(this.root, _val, this)
    return temp != null
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
    this.root = deleteElement(this.root, _val, this)
    return prevSize !== this.size
  }
  return _avl
}())

/**
 * A Code for Testing the AVLTree
 */
// (function test () {
//   const newAVL = new AVLTree()
//   const size = Math.floor(Math.random() * 1000000)
//   let uniques = 0
//   let i, temp, j
//   const array = []
//   for (i = 0; i < size; i++) {
//     temp = Math.floor(Math.random() * Number.MAX_VALUE)
//     if (newAVL.add(temp)) {
//       uniques++
//       array.push(temp)
//     }
//   }
//   if (newAVL.size !== uniques) {
//     throw new Error('elements not inserted properly')
//   }
//   const findTestSize = Math.floor(Math.random() * uniques)
//   for (i = 0; i < findTestSize; i++) {
//     j = Math.floor(Math.random() * uniques)
//     if (!newAVL.find(array[j])) {
//       throw new Error('inserted elements not found')
//     }
//   }
//   const deleteTestSize = Math.floor(uniques * Math.random())
//   for (i = 0; i < deleteTestSize; i++) {
//     j = Math.floor(Math.random() * uniques)
//     temp = array[j]
//     if (newAVL.find(temp)) {
//       if (!newAVL.remove(temp)) {
//         throw new Error('delete not working properly')
//       }
//     }
//   }
// })()

export { AVLTree }
