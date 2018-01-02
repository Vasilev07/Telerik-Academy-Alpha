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
    1,
    2,
    3,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const N = +gets();
const M = +gets();
const P = +gets();
const calculateExpression = (n, m, p) => {
    const exp = (n * n + (1 / (m * p)) + 1337) / (n - (128.523123123 * p)) + Math.sin(Math.floor(m % 180));

    return exp;
};
print(calculateExpression(N, M, P).toFixed(6));