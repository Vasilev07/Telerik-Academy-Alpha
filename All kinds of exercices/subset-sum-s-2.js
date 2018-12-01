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
    '10',
    '1 1 1 1 1 1 1 1 1 11',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const sum = +gets();
let result = 'no';
const sequence = gets().split(' ');
for (let i = 0; i < sequence.length; i++) {
    let currentSum = +sequence[i];
    for (let k = 1; k < sequence.length - 1; k++) {
        currentSum += +sequence[k];
        if (currentSum > sum) {
            currentSum = 0;
            break;
        } else if (currentSum < sum) {
            continue;
        } else {
            result = 'yes';
        }
    }
}

print(result);
