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

const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }
    return factorial(num-1) * num;
};

const cat = factorial(2*n) / (factorial(n+1) * factorial(n));
print(cat);
