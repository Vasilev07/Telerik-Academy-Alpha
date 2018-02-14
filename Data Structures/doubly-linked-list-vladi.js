/* eslint-disable */

class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    first() {
        return this.head ? this.head.value : 'undefined';
    }

    last() {
        return this.tail ? this.tail.value : 'undefined';
    }

    length() {
        return this.length;
    }

    append(...elements) {
        elements.forEach((element) => {
            let newNode = new Node(element);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }

        });
        this.length += elements.length;

        return this;
    }

    prepend(...elements) {
        elements.reverse().forEach((element) => {
            let newNode = new Node(element);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
        });
        this.length += elements.length;

        return this;
    }

    insert(index, ...elements) {
        let isValid = this.validateIndex(index);
        if(isValid) {
            let currentNode = this.getNodeAtIndex(index);
            elements.forEach((element) => {
                let newNode = new Node(element);
                currentNode.next.prev = newNode;
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                newNode.prev = currentNode;
            });
        }

        this.length += elements.length;

        return this;
    }

    validateIndex(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('qj mi kuro simitli e gadno selo');
            return false;
        }
        return true;
    }

    getNodeAtIndex(index) {
        let node = this.head;
        for (let i = 0; i < index; i += 1) {
            node = node.next;
        }
        return node;
    }

    at(index, value) {
        let isValid = this.validateIndex(index);
        if (isValid) {
            if (value) {
                let nodeAtIndex = this.getNodeAtIndex(index);
                nodeAtIndex.value = value;
            } else {
                let nodeAtIndex = this.getNodeAtIndex(index);
                return nodeAtIndex;
            }
        }
    }

    removeAt(index) {
        let isValid = this.validateIndex(index);
        if (isValid) {
            let nodeAtIndex = this.getNodeAtIndex(index);
            nodeAtIndex.prev.next = nodeAtIndex.next;
            nodeAtIndex.next.prev = nodeAtIndex.prev;
            this.length -= 1;
            return nodeAtIndex;
        }
    }

    printAllNodes() {
        let current = this.head;
        console.log(`value: ${current.value} next: ${current.next.value} prev: null`);

        for (let i = 1; i < list.length; i++) {
            current = current.next;
            if (current.next && current.prev) {
                console.log(`value: ${current.value} next: ${current.next.value} prev: ${current.prev.value}`);
            } else if (current.next === null) {
                console.log(`value: ${current.value} next: null prev: ${current.prev.value}`);
            } else if (current.prev === null) {
                console.log(`value: ${current.value} next: ${current.next.value} prev: null`);
            }
        }
    }
}
/* eslint-enable */

const list = new LinkedList();
list.append(1, 2, 3).append(5, 6, 7).prepend(0).insert(2, 6);
list.printAllNodes();
console.log('-'.repeat(18));
console.log(list.removeAt(2));
list.printAllNodes();
