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
    3,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const printMatrix = (number) => {
    const matrix = [];
    for (let row = 0; row < number; row += 1) {
        matrix[row] = [];
        for (let col = 0; col < number; col += 1) {
            matrix[row] += col + 1 + row + ' ';
        }
    }
    print(matrix.join('\n'));
};
printMatrix(n);
