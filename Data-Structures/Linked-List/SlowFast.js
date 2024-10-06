// slowFast.js

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
export function hasCycle(head) {
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
 * Finds the middle element of a linked list.
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode|null} - The middle node or null if the list is empty.
 */
export function findMiddle(head) {
    if (!head) return null;
    
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;        // Move slow pointer one step
        fast = fast.next.next;   // Move fast pointer two steps
    }
    return slow;                 // Slow pointer is at the middle
}

/**
 * Detects the start of the cycle in a linked list.
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode|null} - The node where the cycle starts or null if there is no cycle.
 */
export function detectCycle(head) {
    let slow = head;
    let fast = head;

    // First phase: determine if a cycle exists
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Cycle detected
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;  // Move entry pointer
                slow = slow.next;     // Move slow pointer
            }
            return entry;           // Start of the cycle
        }
    }
    return null;                 // No cycle
}

// Exporting the ListNode class for testing
export { ListNode };
