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
    '5 5',
    '1 2 1 2 5',
    // '7 4',
    // '1 5 4 7',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Node {
    constructor(value, prev) {
        this.value = value;
        this.next = null;
        this.prev = prev || null;
        if (prev) {
            prev.next = this;
        }
    }

    static detach(node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        node.next = null;
        node.prev = null;
    }

    static attach(left, right) {
        if (left.next) {
            right.next = left.next;
            left.next.prev = right;
            left.next = right;
        } else {
            left.next = right;
        }
        right.prev = left;
    }
}

let [numbers, swappings] = gets().split(' ').map(Number);
let swapArround = gets().split(' ').map(Number);

let arrayOfNumbers = Array.from({
    length: numbers + 1,
});
for (let i = 1; i <= numbers; i++) {
    let node = new Node(i, arrayOfNumbers[i - 1]);
    arrayOfNumbers[i] = node;
}
let first = arrayOfNumbers[1];
let biggest = arrayOfNumbers[arrayOfNumbers.length - 1];
let last = arrayOfNumbers[arrayOfNumbers.length - 1];

swapArround.forEach(element => {
    let swap;
    let swapAfter = element;

    if (element % 2 === 0) {
        swapAfter /= 2;
    } else {
        swapAfter *= 2;
    }

    if (swapAfter >= biggest.value) {
        swap = arrayOfNumbers[biggest.value];
    } else {
        swap = arrayOfNumbers[swapAfter];
    }
    const node = arrayOfNumbers[element];
    if (swap.value !== node.value) {
        Node.detach(node);
        Node.attach(swap, node);
        if (swap.prev === null) {
            first = swap;
        }
        if (node.next === null) {
            last = node;
        }
    }

});
let current = first;
let result = [];
while (current !== null) {
    result.push(current.value);
    current = current.next;
}
print(result.join(' '));