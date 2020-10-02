function invertTree(head) {
    if (head) {
      var temp = head.left;
      head.left = head.right;
      head.right = temp;
  
      invertTree(head.left);
      invertTree(head.right);
    }
  
    return head;
  }