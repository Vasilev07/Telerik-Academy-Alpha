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
    '5 5',
    '0 3 9 3 2',
    '5 9 5 1 7',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arrayLenghts = gets().split(' ').map(Number);
const n = arrayLenghts[0];
const m = arrayLenghts[1];

const firstNum = gets().split(' ').map(Number);
const secondtNum = gets().split(' ').map(Number);
const result = [];
const max = Math.max(m, n);
for (let i = 0, remainder = 0; i < max; i++) {
    const currentSum = (firstNum[i] || 0) + (secondtNum[i] || 0) + remainder;
    result[i] = currentSum % 10;
    remainder = (currentSum - result[i]) / 10;
}
print(result.join(' '));

