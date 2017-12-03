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
    '3 2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numbers = gets().split(' ').map(Number);
print(numbers);

const gcd = (a, b) => {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};
print(gcd(numbers[0], numbers[1]));

