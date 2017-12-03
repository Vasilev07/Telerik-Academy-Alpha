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
    3,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// S = 1 + 1!/x + 2!/x2 + … + N!/xN.
const n = +gets();
const x = +gets();
let s = (1/x) + 1;
const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    return factorial(n-1) * n;
};

for (let index = 2; index <= n; index++) {
    s += (factorial(index))/(x**index);
}

print(s.toFixed(5));
