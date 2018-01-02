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
    100000,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
let n = +gets();
let result = 0;
let i = 5;

while (n / i >= 1) {
    result += Math.floor(n / i);
    i *= 5;
}
print(result);
