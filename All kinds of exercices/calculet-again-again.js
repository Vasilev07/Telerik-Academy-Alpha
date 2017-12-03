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
    10,
    6,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const k = +gets();
let result = 0;
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return factorial(n - 1) * n;
};
result += (factorial(n)) / ((factorial(k)) * factorial(n - k));
print(result);
