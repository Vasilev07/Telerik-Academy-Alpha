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
    5,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const number = (num) => {
    const arr = [];
    for (let i = 1; i <= n; i += 1) {
        arr.push(i);
    }
    print(arr.join(' '));
};
number(n);
