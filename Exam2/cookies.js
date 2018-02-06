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

// const numberOfPackages = +gets();
// const packages = gets().split(' ').map(Number);
// let days = 0;
// let arrToSplice;
// while (true) {
//     arrToSplice = [];
//     for (let i = 1; i < packages.length; i++) {
//         let current = packages[i];
//         let prev = packages[i - 1];
//         if (prev < current) {
//             arrToSplice.push(i);
//         }
//     }
//     for (let i = arrToSplice.length - 1; i >= 0; i--) {
//         packages.splice(arrToSplice[i], 1);
//     }
//     if (arrToSplice.length === 0) {
//         break;
//     }
//     days++;
// }
// print(days);

class Node {
    constructor(value, previous) {
        this.value = value;
        this.previous = previous;
        this.next = null;

        if (previous) {
            previous.next = this;
        }
    }
}

const getDays = (cookies) => {
    let first = new Node(cookies[0], null);
    let previous = first;
    for (let i = 1; i < cookies.length; i++) {
        const newNode = new Node(cookies[i], previous);
        previous = newNode;
    }

    let result = 0;
    let nodesToRemove;
    do {
        nodesToRemove = [];
        let current = first;
        while (current.next) {
            if (current.value < current.next.value) {
                nodesToRemove.push(current.next);
            }
            current = current.next;
        }

        if (nodesToRemove.length > 0) {
            result++;
            nodesToRemove.forEach(node => {
                if (node.previous === null) {
                    first = node.next;
                }

                if (node.previous) {
                    node.previous.next = node.next;
                }

                if (node.next) {
                    node.next.previous = node.previous;
                }
            });
        }
    } while (nodesToRemove.length > 0);

    return result;
}
gets();
const cookies = gets().split(' ').map(Number);
const result = getDays(cookies);
print(result);
/* eslint-enable */
