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
    28,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const decimal = +gets();
const binary = decimal.toString(2);
print(binary);
