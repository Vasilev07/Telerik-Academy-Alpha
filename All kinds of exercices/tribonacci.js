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
    2,
    3,
    4,
    10,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = [];
for (let index = 0; index < 3; index++) {
    input.push(+gets());
}
const n = +gets();
for (let i = 2; i < n; i++) {
    const next = input[i - 2] + input[i - 1] + input[i];
    input.push(next);
}
print(input[n - 1]);
