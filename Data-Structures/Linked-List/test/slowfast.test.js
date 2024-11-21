// slowfast.test.js

import { ListNode, hasCycle, createLinkedList } from '../SlowFast.js'; // Adjust the path as necessary

describe('Slow and Fast Pointer', () => {
  it('should detect if a linked list has a cycle', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> (cycle to 3)
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);
    
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node3; // Create a cycle here

    const result = hasCycle(node1);
    expect(result).toBe(true); // Expecting a cycle
  });

  it('should not detect a cycle in a linear linked list', () => {
    // Create a linked list: 1 -> 2 -> 3
    const head = createLinkedList([1, 2, 3]);

    const result = hasCycle(head);
    expect(result).toBe(false); // Expecting no cycle
  });
});

