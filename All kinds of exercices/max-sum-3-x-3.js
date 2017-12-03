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
    '3 3',
    '4 3 5',
    '2 6 4',
    '8 2 7',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const nu = gets().split(' ').map(Number);
const matri = [];
for (let i = 0; i < nu[0]; i++) {
    matri.push(gets().split(' ').map(Number));
}


const matrix = (n, m, matr) => {
    let maxSum = 0;
    let currentSum = 0;

    for (let row = 0; row < n - 3 + 1; row += 1) {
        for (let col = 0; col < m - 3 + 1; col += 1) {
            for (let i = 0; i < 3; i += 1) {
                for (let j = 0; j < 3; j += 1) {
                    currentSum += matr[row + i][col + j];
                }
            }
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
            currentSum = 0;
        }
    }
    print(maxSum);
};
matrix(nu[0], nu[1], matri);
