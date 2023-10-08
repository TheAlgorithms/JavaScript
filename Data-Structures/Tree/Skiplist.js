class SkipNode {
    constructor(value, level) {
        this.value = value;
        this.next = new Array(level);
    }
}

class SkipList {
    constructor() {
        this.head = new SkipNode(-Infinity, 1);
        this.level = 1;
    }

    randomLevel() {
        let level = 1;
        while (Math.random() < 0.5 && level < 32) {
            level++;
        }
        return level;
    }

    insert(value) {
        const newNodeLevel = this.randomLevel();
        const newNode = new SkipNode(value, newNodeLevel);

        const update = new Array(newNodeLevel);
        let current = this.head;

        for (let i = this.level - 1; i >= 0; i--) {
            while (current.next[i] !== undefined && current.next[i].value < value) {
                current = current.next[i];
            }
            if (i < newNodeLevel) {
                update[i] = current;
            }
        }

        for (let i = 0; i < newNodeLevel; i++) {
            newNode.next[i] = update[i].next[i];
            update[i].next[i] = newNode;
        }

        if (newNodeLevel > this.level) {
            this.level = newNodeLevel;
        }
    }

    *iterator() {
        let current = this.head.next[0];
        while (current !== undefined) {
            yield current.value;
            current = current.next[0];
        }
    }
}

// Example usage:
const skipList = new SkipList();

skipList.insert(1);
skipList.insert(4);
skipList.insert(8);
skipList.insert(12);
skipList.insert(16);
skipList.insert(24);

const iterator = skipList.iterator();
for (const value of iterator) {
    console.log(value);
}

