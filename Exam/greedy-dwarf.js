const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '2 3',
    '0 5 2',
    '2 5 3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const binary = gets().split(' ').map(Number);
const matrix = [];
const N = binary[0];
const start = [];

for (let row = 0; row < N; row++) {
    const currentArray = matrix[row] = gets().split(' ').map(Number);
    for (let col = 0; col < currentArray.length; col++) {
        if (currentArray[col] === 0) {
            start.push(row);
            start.push(col);
        }
    }
}

let coins = 0;
let [row, col] = start;
let [r, c] = start;
while (true) {
    const current = matrix[row][col];
    let leftElement = 0;
    let rightElement = 0;
    let upElement = 0;
    let downElement = 0;
    if (col - 1 > -1) {
        leftElement = matrix[row][col - 1];
    }
    if (col + 1 < matrix[c].length) {
        rightElement = matrix[row][col + 1];
    }
    if (row - 1 > -1) {
        upElement += matrix[row - 1][col];
    }
    if (row + 1 < matrix.length) {
        downElement += matrix[row + 1][col];
    }
    if (leftElement === 0 && rightElement === 0 && upElement === 0 && downElement === 0) {
        break;
    }
    if (leftElement >= rightElement && leftElement >= upElement && leftElement >= downElement) {
        matrix[row][col - 1] -= 1;
        col--;
        coins += 1;
    } else if (rightElement > leftElement && rightElement >= upElement && rightElement >= downElement) {
        matrix[row][col + 1] -= 1;
        col++;
        coins += 1;
    } else if (upElement > leftElement && upElement > rightElement && upElement >= downElement) {
        matrix[row - 1][col] -= 1;
        row--;
        coins += 1;
    } else if (downElement > leftElement && downElement > rightElement && downElement > upElement) {
        matrix[row + 1][col] -= 1;
        row++;
        coins += 1;
    }
}
print(coins);