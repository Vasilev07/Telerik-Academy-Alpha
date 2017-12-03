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
    4,
    4,
    4,
    3,
    1,
    2,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const x = +gets();
const y = +gets();
const z = +gets();
print(Math.max(x, y, z));
