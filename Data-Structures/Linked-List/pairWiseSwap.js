//problem link leetcode:https://leetcode.com/problems/swap-nodes-in-pairs/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(listOfValues) {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;

        if (listOfValues instanceof Array) {
            for (const value of listOfValues) {
                this.addLast(value);
            }
        }
    }

    size() {
        return this.length;
    }

    head() {
        return this.headNode?.data ?? null;
    }

    tail() {
        return this.tailNode?.data ?? null;
    }

    isEmpty() {
        return this.length === 0;
    }

    addLast(element) {
        if (this.headNode === null) {
            return this.addFirst(element);
        }
        const node = new Node(element);
        this.tailNode.next = node;
        this.tailNode = node;
        this.length++;
        return this.size();
    }

    addFirst(element) {
        const node = new Node(element);
        if (this.headNode === null) {
            this.tailNode = node;
        }
        node.next = this.headNode;
        this.headNode = node;
        this.length++;
        return this.size();
    }

    // ... (other methods from the original code)

    pairwiseSwap() {
        let current = this.headNode;
        let prev = null;

        while (current && current.next) {
            const nextNode = current.next;
            const nextNextNode = nextNode.next;

            nextNode.next = current;
            current.next = nextNextNode;

            if (prev) {
                prev.next = nextNode;
            } else {
                this.headNode = nextNode;
            }

            prev = current;
            current = nextNextNode;
        }

        if (prev) {
            this.tailNode = prev;
        }
    }

    get() {
        const list = [];
        let currentNode = this.headNode;
        while (currentNode) {
            list.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return list;
    }
}

// Example usage:
const linkedList = new LinkedList([1, 2, 3, 4, 5]);
console.log("Linked List before pairwise swapping:", linkedList.get());

linkedList.pairwiseSwap();
console.log("Linked List after pairwise swapping:", linkedList.get());
