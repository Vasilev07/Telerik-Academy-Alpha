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

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.previous = null;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//     }

//     append(...args) {
//         if (args.length === 1) {
//             const node = new Node(args[0]);
//             if (!this.head) {
//                 this.head = node;
//                 this.tail = node;
//             } else {
//                 this.tail.next = node;
//                 node.previous = this.tail;
//                 this.tail = node;
//             }
//             this.length++;
//         } else {
//             args.forEach((x) => {
//                 this.append(x);
//             });
//         }
//         return this;
//     }

//     removeAt(index) {
//         this.isValidIndex(index);

//         if (index < 0 && !this.head) {
//             throw new Error('List is empty!');
//         }

//         if (index === 0) {
//             const result = this.head.data;

//             if (this.length === 1) {
//                 this.head = null;
//                 this.tail = null;
//                 this.length--;
//                 return result;
//             }

//             this.head = this.head.next;
//             this.head.previous.next = null;
//             this.head.previous = null;
//             this.length--;
//             return result;
//         }

//         const nodeToRemove = this.nodeAtIndex(index);
//         const result = nodeToRemove.data;

//         if (!nodeToRemove.next) {
//             this.tail = nodeToRemove.previous;
//             nodeToRemove.previous = null;
//             this.tail.next = null;
//         } else {
//             nodeToRemove.previous.next = nodeToRemove.next;
//             nodeToRemove.next.previous = nodeToRemove.previous;
//             nodeToRemove.next = null;
//             nodeToRemove.previous = null;
//         }

//         this.length--;
//         return result;
//     }


//     isValidIndex(index) {
//         if (index < 0 || index >= this.length) {
//             throw new Error('Invalid Index!');
//         }
//     }

//     nodeAtIndex(index) {
//         let node = this.head;
//         for (let i = 0; i < index; i++) {
//             node = node.next;
//         }
//         return node;
//     }

//     toArray() {
//         return [...this];
//     }

//     toString() {
//         this.toArray().join(',');
//     }

//     get length() {
//         return this._length;
//     }

//     set length(value) {
//         this._length = value;
//     }
// }

const numberOfPackages = +gets();
const packages = gets().split(' ').map(Number);
let days = 0;
let arrToSplice;
while (true) {
    arrToSplice = [];
    for (let i = 1; i < packages.length; i++) {
        let current = packages[i];
        let prev = packages[i - 1];
        if (prev < current) {
            arrToSplice.push(i);
        }
    }
    for (let i = arrToSplice.length - 1; i >= 0; i--) {
        packages.splice(arrToSplice[i], 1);
    }
    if (arrToSplice.length === 0) {
        break;
    }
    days++;
}
print(days);
