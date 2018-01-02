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
    15,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = +gets();
let counter = 0;
const pathToOne = (n) => {
    while (n > 1) {
        if (n % 2 == 0) // bitmask: *0
            n = n / 2
        else if (n == 3 || n % 4 == 1) // bitmask: 01
            n = n - 1
        else // bitmask: 11
            n = n + 1
        counter += 1
    }
    return counter;
};
print(pathToOne(number));
