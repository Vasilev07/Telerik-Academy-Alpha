/* eslint-disable */
const n = 5;
let matrix = [];

for (let i = 0; i < n; i += 1) {
    const row = Array.from({ lenght : n });
    matrix.push(row);    
}

let dir = 0;
let row = 0;
let col = 0;

let rowDir = [0, 1, 0 , -1];
let colDir = [1, 0, -1, 0];

for (let i = 1; i <= n * n; i++) {
    if (row < n && row >= 0 && col < n && col >= 0 && matrix[row][col] === undefined){
        matrix[row][col] = i;
    }else{
        row -= rowDir[dir];
        col -= colDir[dir];
        dir += 1;
        dir %= 4; 

        i -= 1;
    }
    row += rowDir[dir];
    col += colDir[dir];
    
}
for (const row of matrix) { 
    console.log(row);
}

/*
 1 2 3 
 8 9 4
 7 6 5
 */
/* eslint-enable */
