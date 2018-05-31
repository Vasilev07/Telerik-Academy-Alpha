const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '5 3',
    'Gosho Tosho Penka Miro Stanka',
    'Miro Gosho',
    'Gosho Stanka',
    'Stanka Miro',

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
        node.prev = null;
        node.next = null;
    }

    static attach(node, right) {
        if (right.prev) {
            node.next = right;
            node.prev = right.prev;
            node.prev.next = node;
            node.next.prev = node;
        } else {
            node.next = right;
            node.next.prev = node;
            node.prev = null;
        }
    }
}

const [n, k] = gets().split(' ').map((input) => Number(input));
const students = gets().split(' ');
const positionOfStudent = {};
for (let i = 0; i < n; i++) {
    positionOfStudent[students[i]] = i;
    const node = new Node(students[i], students[i - 1]);
    students[i] = node;
}
let leftEnd = students[0];
for (let i = 0; i < k; i++) {
    const [changeSeat, seatNextTo] = gets().split(' ');
    const changedSeat = students[positionOfStudent[changeSeat]];
    const rightStud = students[positionOfStudent[seatNextTo]];
    if (changedSeat === rightStud) {
        continue;
    }
    if (changedSeat.prev === null) {
        leftEnd = changedSeat.next;
    } else if (rightStud.prev === null) {
        leftEnd = changedSeat;
    }

    Node.detach(changedSeat);
    Node.attach(changedSeat, rightStud);


}
const result = [];

for (let i = 0; i < n; i++) {
    result.push(leftEnd.value);
    leftEnd = leftEnd.next;
}

print(result.join(' '));