class Queue {
    constructor() {
        this.vals = [];
    }
    enqueue(value) {
        this.vals.push(value);
    }
    dequeue() {
        return this.vals.shift();
    }
    isEmpty() {
        return this.vals.length;
    }
}

module.exports = Queue;

