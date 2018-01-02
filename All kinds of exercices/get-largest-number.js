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
    '1 2 3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ').map(Number);
let a = input[0];
let b = input[1];
let c = input[2];
const getMax = (a, b) => {
    if (a >= b) {
        return a;
    }
    return b;
};
print(getMax(getMax(a, b), getMax(b, c)));