/* eslint-disable */
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }


    get length() {
        return this.length;
    }

    append(...elements) {
        // going through every element of the array -> elements
        elements.forEach(el => {
            // create new ListNode of every forEached elemebt
            const newNode = new ListNode(el);
            // if the list is empty
            if (this.first === null) {
                // create new first element
                this.first = newNode;
                //create last element which is equal to first element , next poin to null
                this.last = newNode;
            } else {
                // if the list is not empty
                // reference the last element to List Node
                this.last.next = newNode;
                //last element get value and set List Node
                this.last = newNode;
            }
        });
        // adding the lenght of the array elements to the lenght of the LinkedList
        this.lenght += elements.length;
        // return the whole this which enables chaining
        return this;
    }

    prepend(...elements) {
        // it's very important to reverse the array we get because of the problem we solve
        elements.reverse().forEach(el => {
            const newNode = new ListNode(el);
            if (this.first === null) {
                this.first = newNode;
                this.last = newNode;
            } else {
                newNode.next = this.first;
                this.first = newNode;
            }
        });

        this.lenght += elements.length;

        return this;
    }

    insert(index, ...elements) {
        if (index < 0 || index > this.lenght) {
            throw new Error('Invalid index');
        }

        if (index === 0) {
            return this.prepend(...elements);
        } else if (index === this.lenght) {
            return this.append(...elements);
        } else {
            let nodeToInsertAfter = this._nodeAtIndex(index - 1);

            elements.forEach(el => {
                const newNode = new ListNode(el);
                newNode.next = nodeToInsertAfter.next;
                nodeToInsertAfter.next = newNode;
                nodeToInsertAfter = newNode;
            });
            this.lenght += elements.length;
        }
        return this;
    }

    at(index, value) {
        this._validateIndex(index);

        let nodeToReturn = this._nodeAtIndex(index);
        if (typeof value === 'undefined') {
            nodeToReturn.value = value;
        }

        return nodeToReturn.value;
    }

    removeAt(index) {
        this._validateIndex(index);

        if (index === 0) {

        }
    }

    //  do this to get the needed index 
    _nodeAtIndex(index) {
        let node = this._first;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        return node;
    }

    _validateIndex(index) {
        if (index < 0 || index >= this.lenght) {
            throw new Error('Invalid index');
        }
    }

    *[Symbol.iterator]() {
        let nextNode = this._first;
        while (nextNode !== null) {
            yield nextNode.value;
            nextNode = nextNode.next;
        }
    }

    toArray() {
        return [...this];
    }

    toString() {
        return this.toArray().join(' -> ');
    }

}

class Queue {
    constructor() {
        this._linkedList = new LinkedList();
    }

    enqueue(value) {
        this._linkedList.append(value);
        return this;
    }

    dequeue() {
        return this._linkedList.length ? this._linkedList.removeAt(0) : null;
    }

    get length() {
        return this._linkedList.length;
    }
}

class Stack {
    constructor() {
        this._linkedList = new LinkedList();
    }

    push(value) {
        this._linkedList.prepend(value);
        return this;
    }

    pop() {
        return this._linkedList.length ? this._linkedList.removeAt(0) : null;
    }

    get length() {
        return this._linkedList.length;
    }
}
const list = new LinkedList();
list.append(4, 5, 6).prepend(1, 2, 3);
console.log(list);
/* eslint-enable */
