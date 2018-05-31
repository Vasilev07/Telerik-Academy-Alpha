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
    '8',
    '3',
    '3',
    '2',
    '3',
    '-2',
    '5',
    '4',
    '2',
    '7',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const k = +gets();
const n = +gets();
let arr = [];
for (let i = 0; i < k; i++) {
    arr.push(+gets());
}
arr = arr.sort((x, y) => y - x).slice(0, n).reduce((x, y) => x + y);
print(arr);
