const LinkedList = require('../Data Structures/doubly-linked-list');

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    push(value) {
        this.linkedList.prepend(value);
        return this;
    }

    pop() {
        return this.linkedList.length >= 0 ? this.linkedList.removeAt(0) : null;
    }

    get length() {
        return this.linkedList.length;
    }
}

module.exports = Stack;
