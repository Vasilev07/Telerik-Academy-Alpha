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
    0,
    4,
    20,
    1337,
    2147483648,
    4000000000,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const binarySymbol = gets().toString();
const n = +gets();
for (let i = 0; i < n; i++) {
    let count = 0;
    const decimal = +gets();
    const binary = decimal.toString(2);
    for (let j = 0; j < binary.length; j++) {
        if (binarySymbol === binary[j]) {
            count++;
        }
    }
    print(count);
}