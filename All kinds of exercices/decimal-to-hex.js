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
    254,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const yourNumber = +gets();
const hexString = yourNumber.toString(16).toUpperCase();
print(hexString);
