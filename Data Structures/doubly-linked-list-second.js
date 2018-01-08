class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null; // first in singly
        this.tail = null; // last in singly
    }

    append(...elements) {
        if (elements.length === 1) {
            const node = new Node(elements[0]);
            if (this.head === null) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.previous = this.tail;
                this.tail = node;
            }
        } else {
            elements.forEach((el) => {
                this.append(el);
            });
        }
        return this;
    }

    
}