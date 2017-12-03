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
    console.log(maxSum);
};

matrix(3, 3,
    [
        [4, 3, 5],
        [2, 6, 4],
        [8, 2, 7],
    ]
);
/* eslint-disable */
matrix(5, 5, 
    [
        [1, 1, 3, 3, 5],
        [-6, -7, 2, -3, -1],
        [3, 0, -4, 5, 9],
        [7, -7, 0, 1, 0],
        [-7, -6, -4, -4, 9]
    ]
);

/* first two arrays row / col n - 2
    second two arrays row/ col exact 3 times */