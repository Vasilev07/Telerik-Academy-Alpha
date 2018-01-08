const LinkedList = require('../Data Structures/doubly-linked-list');
class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        return this.linkedList.length ? this.linkedList.removeAt(0) : null;
    }

    get length() {
        return this.linkedList.length;
    }

    isEmpty() {
        return this.linkedList.length === 0;
    }
}

module.exports = Queue;
