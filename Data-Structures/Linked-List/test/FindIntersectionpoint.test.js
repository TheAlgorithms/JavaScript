// FindIntersectionPoint.test.js

import { ListNode, findIntersection } from '../FindIntersectionPoint.js'; // Ensure the path is correct
import { createLinkedList } from '../SlowFast.js'; // Ensure the path is correct

describe('Find Intersection Point', () => {
  it('should find the intersection point in two linked lists', () => {
    // Create linked list 1: 1 -> 2 -> 3 -> 6 -> 7
    const list1 = createLinkedList([1, 2, 3]);
    const intersection = new ListNode(6); // ListNode should be correctly imported
    intersection.next = new ListNode(7);
    list1.next.next.next = intersection; // Connect 3 -> 6

    // Create linked list 2: 4 -> 5 -> 6 -> 7
    const list2 = createLinkedList([4, 5]);
    list2.next.next = intersection; // Connect 5 -> 6

    const expected = intersection; // We expect the intersection node

    const result = findIntersection(list1, list2);
    expect(result).toBe(expected); // Check if the result matches the expected output
  });

  // Additional test cases can be added here
});
