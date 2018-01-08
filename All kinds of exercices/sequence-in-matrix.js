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
    '6 6',
    '92 11 4 2 42 42',
    '92 92 23 72 56 14',
    '92 63 92 46 85 95',
    '92 12 52 92 23 95',
    '92 88 78 71 92 95',
    '26 34 16 95 95 92',

];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// const n = gets().split(' ').map(Number);
// const matrix = [];
// const N = n[0];
// const M = n[1];
// for (let i = 0; i < N; i++) {
//     matrix[i] = gets().split(' ').map(Number);
// }
// let bestCount = 1;
// const checkSequenceAndReturnCount = (previous, next, currentBestCount) => {
//     if (next === previous) {
//         currentBestCount++;

//         if (currentBestCount > bestCount) {
//             bestCount = currentBestCount;
//         }
//     } else {
//         previous = next;
//         currentBestCount = 1;
//     }
//     return {
//         previous,
//         currentBestCount,
//     };
// };

// const moveRight = (i, j, matrix, cols) => {
//     let currentBestCount = 0;
//     let previous = matrix[i][j];
//     for (let col = j; col < cols; col++) {
//         ({
//             previous,
//             currentBestCount,
//         } = checkSequenceAndReturnCount(previous, matrix[i][col], currentBestCount));
//     }
// };

// const moveDown = (i, j, matrix, rows) => {
//     let currentBestCount = 0;
//     let previous = matrix[i][j];
//     for (let row = i; row < rows; row++) {
//         ({
//             previous,
//             currentBestCount,
//         } = checkSequenceAndReturnCount(previous, matrix[row][j], currentBestCount));
//     }
// };

// const moveRightDiagonalUnder = (i, j, matrix, rows) => {
//     let [row, col] = [i, j];
//     let currentBestCount = 0;
//     let previous = matrix[i][j];
//     while (row < rows) {
//         ({
//             previous,
//             currentBestCount,
//         } = checkSequenceAndReturnCount(previous, matrix[row][col], currentBestCount));
//         row++;
//         col++;
//     }
// };

// const moveRightDiagonalOver = (i, j, matrix, cols) => {
//     let [row, col] = [i, j];
//     let currentBestCount = 0;
//     let previous = matrix[i][j];
//     while (col < cols) {
//         ({
//             previous,
//             currentBestCount,
//         } = checkSequenceAndReturnCount(previous, matrix[row][col], currentBestCount));
//         row++;
//         col++;
//     }
// };

// const moveLeftDiagonalUnder = (i, j, matrix, cols) => {
//     let [row, col] = [i, j];
//     let currentBestCount = 0;
//     let previous = matrix[i][j];
//     while (col < cols) {
//         ({
//             previous,
//             currentBestCount,
//         } = checkSequenceAndReturnCount(previous, matrix[row][col], currentBestCount));
//         row--;
//         col++;
//     }
// };

// const moveLeftDiagonalOver = (i, j, matrix, rows) => {
//     let [row, col] = [i, j];
//     let currentBestCount = 0;
//     let previous = matrix[i][j];
//     while (row > -1) {
//         ({
//             previous,
//             currentBestCount,
//         } = checkSequenceAndReturnCount(previous, matrix[row][col], currentBestCount));
//         row--;
//         col++;
//     }
// };

// moveDown(0, M - 1, matrix, M);
// console.log(bestCount);

// const matrixSize = gets().split(' ').map(Number);

// const N = matrixSize[0];
// const M = matrixSize[1];
// const matrix = [];
// let rightResult = 1;
// let downResult = 1;
// let rightDiagonal = 1;
// let leftDiagonal = 1;
// let maxResult = 1;
// // fill matrix
// for (let row = 0; row < N; row += 1) {
//     matrix[row] = gets().split(' ').map(Number);
// }
// going through matrix
// for (let row = 0; row < N; row += 1) {
//     for (let col = 0; col < M; col += 1) {
//         // check right
//         for (let i = 0; i < M; i += 1) {
//             if (col + i + 1 < M) {
//                 const currentNumber = matrix[row][col + i];
//                 const nextNumber = matrix[row][col + i + 1];
//                 if (currentNumber === nextNumber) {
//                     rightResult += 1;
//                 }
//             } else if (maxResult < rightResult) {
//                 maxResult = rightResult;
//                 rightResult = 1;
//             }
//         }
//         // check down
//         for (let j = 0; j < N; j += 1) {
//             if (row + j + 1 < N) {
//                 const currentNumber = matrix[row + j][col];
//                 const nextNumber = matrix[row + j + 1][col];
//                 if (currentNumber === nextNumber) {
//                     downResult += 1;
//                 }
//             } else if (maxResult < downResult) {
//                 maxResult = downResult;
//                 downResult = 1;
//             }
//         }
//         // // check diagonal
//         for (let z = 0; z < N; z += 1) {
//             if (row + z + 1 < N && col + z + 1 < M) {
//                 const currentNumber = matrix[row + z][col + z];
//                 const rightDiagonalNumber = matrix[row + z + 1][col + z + 1];
//                 if (currentNumber === rightDiagonalNumber) {
//                     rightDiagonal += 1;
//                 }
//             } else if (maxResult < rightDiagonal) {
//                 maxResult = rightDiagonal;
//                 rightDiagonal = 1;
//             }
//             if (row + z + 1 < N && col - z - 1 >= 0) {
//                 const currentNumber = matrix[row + z][col - z];
//                 const leftDiagonalNumber = matrix[row + z + 1][col - z - 1];
//                 if (currentNumber === leftDiagonalNumber) {
//                     leftDiagonal += 1;
//                 }
//             } else if (maxResult < leftDiagonal) {
//                 maxResult = leftDiagonal;
//                 leftDiagonal = 1;
//             }
//         }
//         rightResult = 1;
//         downResult = 1;
//         rightDiagonal = 1;
//         leftDiagonal = 1;
//     }
// }
// print(maxResult);
const [n, m] = gets().split(' ').map(Number);
const matrix = [];
let counter = 1;
let maxCounter = 1;
// fill matrix
for (let row = 0; row < n; row += 1) {
    matrix[row] = gets().split(' ').map(Number);
}
for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
        // cheking right of the element at the same row update only col
        for (let k = 0; k < m; k++) {
            if (col + k + 1 <= m) {
                const current = matrix[row][col + k];
                const next = matrix[row][col + k + 1];
                if (current === next) {
                    counter++;
                    if (counter > maxCounter) {
                        maxCounter = counter;
                    }
                } else {
                    counter = 1;
                }
            }
        }
        // checking down of the element at the same col update row
        for (let j = 0; j < n; j++) {
            if (row + j + 1 < n) {
                const current = matrix[row + j][col];
                const next = matrix[row + j + 1][col];
                if (current === next) {
                    counter++;
                    if (counter > maxCounter) {
                        maxCounter = counter;
                    }
                } else {
                    counter = 1;
                }
            }
        }
        // check diagonal
        for (let z = 0; z < n; z++) {
            // main diagonal
            if (row + z + 1 < n && col + z + 1 < m) {
                const current = matrix[row + z][col + z];
                const next = matrix[row + z + 1][col + z + 1];
                if (current === next) {
                    counter++;
                    if (counter > maxCounter) {
                        maxCounter = counter;
                    }
                } else {
                    counter = 1;
                }
            }
            // under secondary
            if (row - z - 1 > -1 && col + z + 1 < m) {
                const current = matrix[row - z][col + z];
                const next = matrix[row - z - 1][col + z + 1];
                if (current === next) {
                    counter++;
                    if (counter > maxCounter) {
                        maxCounter = counter;
                    }
                } else {
                    counter = 1;
                }
            }
        }
    }
}
print(maxCounter);
/*
'6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
*/