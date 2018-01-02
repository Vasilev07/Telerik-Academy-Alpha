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
const matrix = [];
for (let i = 0; i < n; i += 1) {
    const row = Array.from({
        lenght: n,
    });
    matrix.push(row);
}

let dir = 0;
let row = 0;
let col = 0;

const rowDir = [0, 1, 0, -1];
const colDir = [1, 0, -1, 0];

for (let i = 1; i <= n * n; i++) {
    if (row < n && row >= 0 && col < n && col >= 0 && matrix[row][col] === undefined) {
        matrix[row][col] = i;
    } else {
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
    print(row.join(' '));
}