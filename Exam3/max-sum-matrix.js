/* eslint-disable */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '5',
    '1 1 1 1 1 1',
    '1 13 4 -5 6 1',
    '1 5 9 31 2 1',
    '1 14 5 -6 7 1',
    '1 1 1 1 1 1',
    '1 1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numberOfRows = +gets();
let matrix = [];
for (let i = 0; i < numberOfRows; i++) {
    const currentRow = gets().split(' ').map(Number);
    matrix.push(currentRow);
}

const coordinates = gets().split(' ').map(Number);

let maxSum = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < coordinates.length; i += 2) {
    let row = coordinates[i];
    let col = coordinates[i + 1];

    if (row > 0 && col > 0) {
        let currentSum = 0;
        for (let i = 0; i < col - 1; i++) {
            currentSum += matrix[row - 1][i]
        }
        for (let i = row - 1; i >= 0; i--) {
            currentSum += matrix[i][col - 1];
        }
        if (currentSum >= maxSum) {
            maxSum = currentSum;
        }
    } else if (row > 0 && col < 0) {
        col = Math.abs(col);
        let currentSum = 0
        for (let i = 0; i < col; i++) {
            currentSum += matrix[row - 1][i];
        }
        for (let i = matrix.length - 1; i > row - 1; i--) {
            currentSum += matrix[i][col - 1];
        }
        if (currentSum >= maxSum) {
            maxSum = currentSum;
        }
    } else if (row < 0 && col < 0) {
        let currentSum = 0;
        row = Math.abs(row);
        col = Math.abs(col);
        for (let i = col - 1; i < matrix[row - 1].length; i++) {
            currentSum += matrix[row - 1][i];
        }
        for (let i = row; i < matrix.length; i++) {
            currentSum += matrix[i][col - 1];
        }
        if (currentSum >= maxSum) {
            maxSum = currentSum;
        }
    } else if (row < 0 && col > 0) {
        let currentSum = 0;
        row = Math.abs(row);
        for (let i = matrix[row - 1].length - 1; i > col - 1; i--) {
            currentSum += matrix[row - 1][i];
        }
        for (let i = row - 1; i >= 0; i--) {
            currentSum += matrix[i][col - 1]
        }
        if (currentSum >= maxSum) {
            maxSum = currentSum;
        }
    }
}
print(maxSum);