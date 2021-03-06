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
const dist = n - k;
let result2 = 1;
let result = 1;
for (let i = n; i > dist; i--) {
    result *= i;
}
for (let j = 1; j <= k; j++) {
    result2 *= j;
}
print(result / result2);
// N! / (K! * (N - K)!)