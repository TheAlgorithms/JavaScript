
/* NOTE: 
Javascript isnt my primary language, so the code is definetly not as good as it could be
please send me any issues you find and ill get them fixes as soon as I can */

// this should probably be a constructor, but a function does what we need it to
function listnode(val) {
    this.val = val;
    this.next = null;
}


// function that takes an array, and returns the head of a linked list with each index as one node
function arrayToList(arr) {
    head = new listnode(arr[0])
    let startingnode = head;
    if(arr[1] == null) return head;
    for(var i = 1; i < arr.length; i++) {
        current = new listnode(arr[i]);
        head.next = current;
        head = head.next;
    }

    return startingnode;
}
// function that takes a linked list, and returns an array of all the node values
function listToArray(head) {
    var array = [];
    while(head != null) {
        array.push(head.val);
        head = head.next;
    }
    return array;
}