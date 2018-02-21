const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '6',
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    static disconnect(node) {
        if (node.next) {
            node.next.prev = null;
        }
        if (node.prev) {
            node.prev.next = null;
        }

        node.next = null;
        node.prev = null;
        return node;
    }

    static connect(first, second) {
        if (first === second) {
            return;
        }

        first.next = second;
        second.prev = first;
    }
}

const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const positions = gets().split(' ').map((x) => +x);

const numbers = [];

let head = null;
let tail = null;

for (let i = 1; i <= n; i++) {
    const node = new Node(i);

    if (numbers.length < 1) {
        head = node;
        tail = node;
        numbers.push(node);
        continue;
    }
    numbers.push(node);
    node.prev = tail;
    node.prev.next = node;
    tail = node;
}


for (let i = 0; i < positions.length; i++) {

    const toSwap = numbers[positions[i] - 1];
    const newHead = toSwap.next;
    const newTail = toSwap.prev;

    Node.disconnect(toSwap);
    Node.connect(toSwap, head);
    Node.connect(tail, toSwap);

    head = newHead || toSwap;
    tail = newTail || toSwap;
}

print(...head);