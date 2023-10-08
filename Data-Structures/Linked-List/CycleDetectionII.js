/**
 * A LinkedList based solution for Detecting a start node of the Cycle in a list.
 * https://en.wikipedia.org/wiki/Cycle_detection
 */
  
  function detectCycleNode(head) {
    /*
    Problem Statement:
    Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
    Link for the Problem: https://leetcode.com/problems/linked-list-cycle-ii/
    */

    let length = 0;
    let fast = head;
    let slow = head;
  
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        // Calculate length
        length = lengthCycle(slow);
        break; 
      }
    }
    
    if (length === 0) {
      return null;  //if length = 0, return null
    }
  
    let f = head;
    let s = head;
    while (length > 0) {
      s = s.next;
      length--;
    }
    
    while (f !== s) {
      f = f.next;
      s = s.next; 
    }
  
    return s;
  }

  function lengthCycle(head) {
    let fast = head;
    let slow = head;
  
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        let temp = slow;
        let length = 0;
        do {
          temp = temp.next;
          length++;
        } while (temp !== slow);
        return length;
      }
    }
  
    return 0;
  }

  export { detectCycleNode}