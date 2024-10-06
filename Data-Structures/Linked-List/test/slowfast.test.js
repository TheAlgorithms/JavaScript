// test.js

import { ListNode, hasCycle, findMiddle, detectCycle } from '../SlowFast.js';

function createLinkedList(arr) {
    let head = null;
    let current = null;

    for (let value of arr) {
        const newNode = new ListNode(value);
        if (!head) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = newNode;
        }
    }

    return head;
}

function runTests() {
    // Test Case 1: Cycle detection
    const cycleList = createLinkedList([1, 2, 3]);
    cycleList.next.next.next = cycleList.next; // Creates a cycle (3 -> 2)
    console.log(`Test 1: Cycle exists - ${hasCycle(cycleList) ? 'Passed' : 'Failed'}`);

    // Test Case 2: No cycle
    const noCycleList = createLinkedList([1, 2, 3]);
    console.log(`Test 2: No cycle - ${!hasCycle(noCycleList) ? 'Passed' : 'Failed'}`);

    // Test Case 3: Finding the middle element
    const midList = createLinkedList([1, 2, 3, 4, 5]);
    const midNode = findMiddle(midList);
    console.log(`Test 3: Middle element - Expected: 3, Got: ${midNode.value} - ${midNode.value === 3 ? 'Passed' : 'Failed'}`);

    // Test Case 4: Finding the start of the cycle
    const cycleStartList = createLinkedList([1, 2, 3]);
    cycleStartList.next.next.next = cycleStartList.next; // Creates a cycle (3 -> 2)
    const startNode = detectCycle(cycleStartList);
    console.log(`Test 4: Start of cycle - Expected: 2, Got: ${startNode ? startNode.value : 'null'} - ${startNode && startNode.value === 2 ? 'Passed' : 'Failed'}`);

    // Test Case 5: No cycle in detectCycle
    console.log(`Test 5: No cycle - Expected: null, Got: ${detectCycle(noCycleList) ? detectCycle(noCycleList).value : 'null'} - ${detectCycle(noCycleList) === null ? 'Passed' : 'Failed'}`);
}

// Run the tests
runTests();
