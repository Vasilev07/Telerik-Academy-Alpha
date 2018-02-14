/* eslint-disable */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '7',
    '8 4 7 5 6 10 9',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

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

    addLast(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length += 1;

        return this;
    }

    removeFirst() {
        if (this.head === null) {
            return null;
        }

        this.length -= 1;

        const value = this.head.value;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail === null;
            return value;
        }

        this.head.prev = null;

        return value;
    }

    appendList(list) {
        if (this.tail) {
            this.tail.next = list.head;
        } else {
            this.head = list.head;
        }

        this.length += list.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const getDays = (cookies) => {
    const list = new LinkedList();
    list.addLast(cookies[0]);
    let arrayOfLinkedLists = [list];
    for (let i = 1; i < cookies.length; i++) {
        if (cookies[i - 1] >= cookies[i]) {
            arrayOfLinkedLists[arrayOfLinkedLists.length - 1].addLast(cookies[i]);
        } else {
            const curr = new LinkedList();
            curr.addLast(cookies[i]);
            arrayOfLinkedLists.push(curr);
        }
    }

    let result = 0;
    while (arrayOfLinkedLists.length > 1) {
        result++;
        const newArr = [arrayOfLinkedLists[0]];
        for (let i = 1; i < arrayOfLinkedLists.length; i++) {
            arrayOfLinkedLists[i].removeFirst();
        }

        for (let i = 1; i < arrayOfLinkedLists.length; i++) {
            let left = newArr[newArr.length - 1];
            let right = arrayOfLinkedLists[i];

            if (!left.isEmpty() && !right.isEmpty()) {
                if (left.tail.value >= right.head.value) {
                    left.appendList(right);
                } else {
                    newArr.push(right);
                }
            }
        }
        arrayOfLinkedLists = newArr;
    }
    return result;
}

gets();
const cookies = gets().split(' ').map(Number);
print(getDays(cookies));
/* eslint-enable */
