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
    '1010',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const binary = gets();
let decimal = 0;
for (let i = binary.length - 1; i >= 0; i--) {
    const lastElement = binary[binary.length - i - 1];
    if (lastElement === '0') {
        continue;
    }

    decimal += (2 ** i);
}
print(decimal);
