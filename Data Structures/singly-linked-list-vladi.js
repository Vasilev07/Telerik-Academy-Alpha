/* eslint-disable */
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    first() {
        return this.first ? this.first.value : 'undefined';
    }

    last() {
        return this.last ? this.last.value : 'undefined';
    }

    length() {
        return this.length;
    }

    append(...data) {
        data.forEach(element => {
            let newNode = new Node(element);
            if (this.last === null) {
                this.first = newNode;
                this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }
        });
        this.length += data.length;

        return this;
    }

    prepend(...data) {
        data.reverse().forEach((element) => {
            let newNode = new Node(element);
            if (this.first === null) {
                this.first = newNode;
                this.last = newNode;
            } else {
                newNode.next = this.first;
                this.first = newNode;
            }
        });
        this.length += data.length;

        return this;
    }

    insert(index, ...data) {
        if (index === this.length - 1) {
            return this.append(...data);
        } else if (index === 0) {
            return this.prepend(...data);
        } else {
            if (this.validIndex(index)) {
                let currentNode = this.getIndex(index);
                data.forEach((element) => {
                    let newNode = new Node(element);
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    currentNode = newNode;
                });
            }

            this.length += data.length;
        }

        return this;
    }

    at(index, data) {
        let isValid = this.validIndex(index);
        if (isValid) {
            if (data) {
                let currentNode = this.atIndex(index);
                currentNode.value = data;
            } else {
                return this.atIndex(index);
            }
        } else {
            return isValid;
        }
    }

    removeAt(index) {
        let previousNode = this.atIndex(index - 1);
        let currentNode = this.atIndex(index);
        previousNode.next = currentNode.next;

        this.length -= 1;

        return this;
    }

    atIndex(index) {
        let currentNode = this.first;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    validIndex(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Dai validen index be batal');
            return false;
        }
        return true;
    }

    getIndex(index) {
        let counter = this.first;
        for (let i = 1; i < index; i++) {
            counter = counter.next;
        }
        return counter;
    }

    printAllNodes() {
        let current = this.first;
        console.log(`value: ${current.value} next: ${current.next.value}`);

        for (let i = 1; i < list.length; i++) {
            current = current.next;
            if (current.next) {
                console.log(`value: ${current.value} next: ${current.next.value}`);
            } else {
                console.log(`value: ${current.value} next: null`);
            }
        }
    }
}

let list = new LinkedList();
list.append(1, 4, 5);
list.insert(1, 2, 3);
list.removeAt(1);
list.printAllNodes();
/* eslint-enable */