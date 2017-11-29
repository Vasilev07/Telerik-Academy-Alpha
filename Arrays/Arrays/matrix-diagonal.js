function solve(matrix) {
    let sum = 0;
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 0; col < row; col++) {
            sum += matrix[row][col];
        }
    }
    console.log(sum);
}
solve([
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 6, 7],
    [4, 5, 6, 1, 8],
    [5, 6, 7, 8, 1]
]);

function solve2(matrix) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col <= row; col++) {
            sum += matrix[row][col];
        }
    }
    console.log(sum);
}
solve2([
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 6, 7],
    [4, 5, 6, 1, 8],
    [5, 6, 7, 8, 1]
]);

function solve3(matrix) {
    let sum = 0;
    for (let row = matrix.length - 1; row >= 1; row--) {
        for (let col = row; col >= 0; col--) {
            sum += matrix[row][col];
        }
    }
    console.log(sum);
}
solve3([
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 6, 7],
    [4, 5, 6, 1, 8],
    [5, 6, 7, 8, 1]
]);

function solve4(matrix) {
    let sum = 0;
    for (let row = matrix.length - 1; row >= 0; row--) {
        for (let col = row; col >= 0; col--) {
            sum += matrix[row][col];
        }
    }
    console.log(sum);
}
solve4([
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 6, 7],
    [4, 5, 6, 1, 8],
    [5, 6, 7, 8, 1]
]);



function generateMatrix(n) {
    var total = n * n;
    var result = [];

    for (var i = 0; i < n; i++) {
        var rs = [];
        for (var j = 0; j < n; j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    var x = 0;
    var y = 0;
    var step = 0;
    for (var i = 0; i < total;) {
        while (y + step < n) {
            i++;
            result[x][y] = i;
            y++;

        }
        y--;
        x++;

        while (x + step < n) {
            i++;
            result[x][y] = i;
            x++;
        }
        x--;
        y--;

        while (y >= step) {
            i++;
            result[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;

        while (x >= step) {
            i++;
            result[x][y] = i;
            x--;
        }
        x++;
        y++;
    }
    return result;
}

console.log(generateMatrix(3).join('\n'));
/*
[1 2 3]
[8 9 4]
[7 6 5]
*/

//jagged arrays


