// FindIntersectionPoint.js

// Definition for singly-linked list node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Finds the intersection point of two linked lists.
 * @param {ListNode} headA - The head of the first linked list.
 * @param {ListNode} headB - The head of the second linked list.
 * @returns {ListNode|null} The intersection node or null if no intersection.
 */
function findIntersection(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    // Traverse both lists
    while (a !== b) {
        a = a ? a.next : headB; // When reaching the end of list A, redirect to list B
        b = b ? b.next : headA; // When reaching the end of list B, redirect to list A
    }

    return a; // This will be either the intersection node or null
}

export { ListNode, findIntersection }; // Ensure ListNode is exported
