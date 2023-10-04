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

    search(target) {
        let current = this.head;

        for (let i = this.level - 1; i >= 0; i--) {
            while (current.next[i] !== undefined && current.next[i].value < target) {
                current = current.next[i];
            }
        }

        if (current.next[0] !== undefined && current.next[0].value === target) {
            return true;
        }

        return false;
    }

    delete(value) {
        let current = this.head;
        const update = new Array(this.level);

        for (let i = this.level - 1; i >= 0; i--) {
            while (current.next[i] !== undefined && current.next[i].value < value) {
                current = current.next[i];
            }
            update[i] = current;
        }

        if (current.next[0] !== undefined && current.next[0].value === value) {
            const deletedNode = current.next[0];
            for (let i = 0; i < deletedNode.next.length; i++) {
                update[i].next[i] = deletedNode.next[i];
            }

            // Update the skip list's level if necessary
            while (this.level > 1 && this.head.next[this.level - 1] === undefined) {
                this.level--;
            }

            return true;
        }

        return false;
    }

    display() {
        for (let i = this.level - 1; i >= 0; i--) {
            let current = this.head.next[i];
            let levelStr = `Level ${i}: Head -> `;

            while (current !== undefined) {
                levelStr += `${current.value} -> `;
                current = current.next[i];
            }

            console.log(levelStr + "null");
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

console.log(skipList.search(8)); // Should print true
console.log(skipList.search(5)); // Should print false

skipList.delete(8);
skipList.display();
