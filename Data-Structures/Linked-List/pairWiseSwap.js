
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
}

export { Node, LinkedList };
