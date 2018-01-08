const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '3 3',
    '10 10 10',
    '10 0 10',
    '10 10 10',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets().split(' ').map(Number);
const matrix = [];
const N = n[0];
const start = [];

for (let row = 0; row < N; row++) {
    const currentArray = matrix[row] = gets().split(' ').map(Number);;
    for (let col = 0; col < currentArray.length; col++) {
        if (currentArray[col] === 0) {
            start.push(row);
            start.push(col);
        }
    }
}

let coins = 0;
const getBiggerNeighbour = (matrix, row, col) => {
    let leftElement = 0;
    let rightElement = 0;
    let upElement = 0;
    let downElement = 0;
    const currentElement = matrix[row][col];
    if (col > 0) {
        leftElement += matrix[row][col - 1];
    }
    if (col < matrix[row].length - 1) {
        rightElement += matrix[row][col + 1];
    }
    if (row > 0) {
        upElement += matrix[row - 1][col];
    }
    if (row < matrix.length - 1) {
        downElement += matrix[row + 1][col];
    }

    if (leftElement === 0 && rightElement === 0 && upElement === 0 && downElement === 0) {
        return;
    }
    if (leftElement >= rightElement && leftElement >= upElement && leftElement >= downElement) {
        getBiggerNeighbour(matrix, row, col - 1, matrix[row][col - 1] -= 1);
        coins += 1;
    }
    if (rightElement > leftElement && rightElement >= upElement && rightElement >= downElement) {
        getBiggerNeighbour(matrix, row, col + 1, matrix[row][col + 1] -= 1);
        coins += 1;
    }
    if (upElement > leftElement && upElement > rightElement && upElement >= downElement) {
        getBiggerNeighbour(matrix, row - 1, col, matrix[row - 1][col] -= 1);
        coins += 1;
    }
    if (downElement > leftElement && downElement > rightElement && downElement > upElement) {
        getBiggerNeighbour(matrix, row + 1, col, matrix[row + 1][col] -= 1);
        coins += 1;
    }
    return coins;
}
const finalCoins = getBiggerNeighbour(matrix, start[0], start[1]);
print(finalCoins);