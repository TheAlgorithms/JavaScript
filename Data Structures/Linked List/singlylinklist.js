/* SinglyLinkedList!!
* A linked list is implar to an array, it hold values.
* However, links in a linked list do not have indexes. With
* a linked list you do not need to predetermine it's size as
* it grows and shrinks as it is edited. This is an example of
* a singly linked list.
*/

//Functions - add, remove, indexOf, elementAt, addAt, removeAt, view

//Creates a LinkedList
function LinkedList(){
  //Length of linklist and head is null at start
  var length = 0;
  var head = null;

  //Creating Node with element's value
  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  //Returns length
  this.size = function(){
    return length;
  };

  //Returns the head
  this.head = function(){
    return head;
  };

  //Creates a node and adds it to linklist
  this.add = function(element){
    var node = new Node(element);
    //Check if its the first element
    if(head === null){
      head = node;
    }
    else {
      var currentNode = head;

      //Loop till there is node present in the list
      while(currentNode.next){
          currentNode = currentNode.next;
      }

      //Adding node to the end of the list
      currentNode.next = node;
    }
    //Increment the length
    length++;
  };

  //Removes the node with the value as param
  this.remove = function(element){
    var currentNode = head;
    var previousNode;

    //Check if the head node is the element to remove
    if(currentNode.element === element){
      head = currentNode.next;
    }
    else {

      //Check which node is the node to remove
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      //Removing the currentNode
      previousNode.next = currentNode.next;
    }

    //Decrementing the length
    length--;
  };

  //Return if the list is empty
  this.isEmpty = function(){
    return length === 0;
  };

  //Returns the index of the element passed as param otherwise -1
  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;

    while(currentNode){
      index++;

      //Checking if the node is the element we are searching for
      if(currentNode.element === element){
        return index+1;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  //Returns the element at an index
  this.elementAt = function(index){
    var currentNode = head;
    var count = 0;
    while(count < index){
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  //Adds the element at specified index
  this.addAt = function(index, element){
    index--;
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    //Check if index is out of bounds of list
    if(index > length){
      return false;
    }

    //Check if index is the start of list
    if(index === 0){
      node.next = currentNode;
      head = node;
    }
    else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      //Adding the node at specified index
      node.next = currentNode;
      previousNode.next = node;
    }

    //Incrementing the length
    length++;
  };

  //Removes the node at specified index
  this.removeAt = function(index) {
    index--;
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    //Check if index is present in list
    if(index < 0 || index >= length){
      return null;
    }

    //Check if element is the first element
    if (index === 0) {
      head = currentNode.next;
    }
    else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    //Decrementing the length
    length--;
    return currentNode.element;
  };

  //Function to view the LinkedList
  this.view = function () {
    var currentNode = head;
    var count = 0;
    while(count < length){
      count++;
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  };
};

//Implementation of LinkedList
var linklist = new LinkedList();
linklist.add(2);
linklist.add(5);
linklist.add(8);
linklist.add(12);
linklist.add(17);
console.log(linklist.size());
console.log(linklist.removeAt(4));
linklist.addAt(4,15);
console.log(linklist.indexOf(8));
console.log(linklist.size());
linklist.view();
