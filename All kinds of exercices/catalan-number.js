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

const num = +gets();

const catalan = (num) => {
    let result = 0;
    if (num === 0) {
        return 1;
    }
    result = (4 * num - 2) * catalan(num - 1) / (num + 1);
    return result;
};
print(catalan(num))