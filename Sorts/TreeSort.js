/*
Tree Sort 
Wikipedia said : A tree sort is a sort algorithm that builds a binary search tree 
from the elements to be sorted, and then traverses the tree (in-order) so that the 
elements come out in sorted order. Its typical use is sorting elements online: after
each insertion, the set of elements seen so far is available in sorted order.

More information: https://en.wikipedia.org/wiki/Tree_sort

 */
class node {
    constructor(val){
        this.value = val
        this.left = 0
        this.right = 0
    }

    insert(val){
        if(this.value){
            if (val < this.value) {
                if (this.left == 0){
                    this.left = new node(val)
                } else {
                    this.left.insert(val)
                }
            } else if (val > this.value){
                if(this.right == 0){
                    this.right = new node(val)
                } else {
                    this.right.insert(val)
                }
            }
        } else {
            this.value = val
        }
    }
}

function inorder(root, res){
    if (root){
        inorder(root.left, res)
        res.push(root.value)
        inorder(root.right, res)
    }
}

function tree_sort(arr) {

    if(arr.length == 0){
        return arr
    }
    var root = new node(arr[0])
    for (let i = 1; i < arr.length; i++){
        root.insert(arr[i])
    }
    var res = []
    inorder(root, res)
    return res
    
}


const array = [3, 0, 100, 2, 5, -1, 4, 1, -2]

// Array before Sort
console.log('-----Before Tree Sorting-----')
console.log(array)

// Array after sort
console.log('-----After Tree Sorting-----')
console.log(tree_sort(array))