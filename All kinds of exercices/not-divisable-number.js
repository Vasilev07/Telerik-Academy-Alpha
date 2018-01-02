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
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let result = '';
for (let index = 1; index <= n; index++) {
    if (index % 3 !== 0 && index % 7 !== 0) {
        result += index + ' ';
    }
}
print(result);