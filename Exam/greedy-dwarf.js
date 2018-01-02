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
    '10 10 0',
    '10 10 10',
    '10 10 10',
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
const getBiggerNeighbour = (matrix, row, col) => {
    while (true) {
        let leftElement = 0;
        let rightElement = 0;
        let upElement = 0;
        let downElement = 0;
        if (col > 1) {
            leftElement += matrix[row][col - 1];
        }
        if (col < matrix[row].length - 1) {
            rightElement += matrix[row][col + 1];
        }
        if (row > 1) {
            upElement += matrix[row - 1][col];
        }
        if (row < matrix.length - 1) {
            downElement += matrix[row + 1][col];
        }

        if (leftElement === 0 && rightElement === 0 && upElement === 0 && downElement === 0) {
            break;
        }

        if (leftElement >= rightElement && leftElement >= upElement && leftElement >= downElement) {
            row += 0;
            col -= 1;
            matrix[row][col - 1] -= 1;
            coins += 1;
        }
        if (rightElement > leftElement && rightElement >= upElement && rightElement >= downElement) {
            row += 0;
            col += 1;
            matrix[row][col + 1] -= 1;
            coins += 1;
        }
        if (upElement > leftElement && upElement > rightElement && upElement >= downElement) {
            row -= 1;
            col += 0;
            matrix[row - 1][col] -= 1;
            coins += 1;
        }
        if (downElement > leftElement && downElement > rightElement && downElement > upElement) {
            row += 1;
            col += 0;
            matrix[row + 1][col] -= 1;
            coins += 1;
        }
    }
    return coins;
}
print(getBiggerNeighbour(matrix, start[0], start[1]));



const getPivotIndex = (arr) => arr.length / 2 | 0;

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const currentPivotInex = getPivotIndex(arr);
    const pivot = arr[currentPivotInex];
    let left = [];
    let right = [];

    for (let i = 0; i < currentPivotInex; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    for (let i = currentPivotInex; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);
};
console.log(quickSort([4, 7, 8, 1, 3, 2, 9]));