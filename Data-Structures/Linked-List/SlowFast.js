// SlowFast.js

// Definition for singly-linked list node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Detects if a linked list has a cycle.
 * @param {ListNode} head - The head of the linked list.
 * @returns {boolean} - True if there's a cycle, false otherwise.
 */
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;        // Move slow pointer one step
        fast = fast.next.next;   // Move fast pointer two steps

        if (slow === fast) {
            return true;         // Cycle detected
        }
    }
    return false;                // No cycle
}

/**
 * Creates a linked list from an array of values.
 * @param {Array<number>} values - The values to create the linked list from.
 * @returns {ListNode|null} - The head of the created linked list.
 */
function createLinkedList(values) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    for (const value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummyHead.next; // Return the head of the created linked list
}

// Exporting the ListNode class and functions for testing
export { ListNode, hasCycle, createLinkedList }; // Ensure ListNode is exported
