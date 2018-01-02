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
    '012351235612361236126123423151612312342134236213623153124234',
    '010`52`46124',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const x = gets();
const y = gets();
const x0 = x[0];
const y0 = y[0];
if (!isNaN(x0) && !isNaN(y0) && x0 !== '0' && y0 !== '0') {
    print(1);
} else if (!isNaN(x0) && y0 === '-' && x0 !== '0') {
    print(4);
} else if (x0 === '-' && y0 === '-') {
    print(3);
} else if (x0 === '-' && !isNaN(y0) && y0 !== '0') {
    print(2);
} else if (x0 === '0' && !isNaN(y0) && y0 !== '0') {
    print(5);
} else if (!isNaN(x0) && y0 === '0' && x0 !== '0') {
    print(6);
} else if (x0 === '0' && y0 === '0') {
    print(0);
}
