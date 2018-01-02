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
    '1, 3, -6, 7, 4, 1, 12',
    '1',
    '3',
    '1, 2, -3',
    '1, 3, -2',
    '1, -1,',

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(', ').map(Number);
const n = +gets();

let maxSum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    const pattern = gets().split(', ').map(Number);
    let sum = 0;
    let j = 0;
    let index = 0;
    const valley = input;
    while (typeof valley[index] === 'number' &&
        valley.indexOf(index) < 0 &&
        index >= 0 &&
        index < valley.length) {
        sum += valley[index];
        valley[index] = 'collected';
        valley.push(index);
        index += pattern[j];
        j += 1;
        j %= pattern.length;
    }
    if (sum > maxSum) {
        maxSum = sum;
    }
    print(maxSum);
}