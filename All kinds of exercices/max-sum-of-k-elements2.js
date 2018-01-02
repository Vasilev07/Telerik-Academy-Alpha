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
    8,
    3,
    3,
    2,
    3, -2,
    5,
    4,
    7,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let k = +gets();
const arr = [];

for (let i = 1; i < n; i++) {
    arr.push(+gets());
}
arr.sort((x, y) => {
    return x - y;
});

let sum = 0;
while (k > 0) {
    const last = arr.pop();
    sum += last;
    k -= 1;
}
print(sum);
