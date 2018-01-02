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

let input = +gets();
let result = '';
let remainder = 0;

do {
    remainder = Math.floor(input % 2);
    input = Math.floor(input / 2);
    result = remainder.toString() + remainder;    
} while (input > 0);

print(result);
