const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '6',
    '7',
    '3',
    '4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Queue {
    constructor() {
        this.vals = [];
    }
    enqueue(value) {
        this.vals.push(value);
    }
    dequeue() {
        return this.vals.shift();
    }
    isEmpty() {
        return !this.vals.length;
    }
}

const rows = +gets();
const cols = +gets();
let startRow = +gets();
let startCol = +gets();

const matrix = [];

for (let i = 0; i < rows; i++) {
    const currentRow = [];
    for (let k = 0; k < cols; k++) {
        currentRow.push(0);
    }
    matrix.push(currentRow);
}

matrix[startRow][startCol] = 1;

const queue = new Queue();

const moves = [-2, -1, -2, 1, -1, -2, -1, 2, 2, -1, 2, 1, 1, -2, 1, 2];

queue.enqueue(startRow);
queue.enqueue(startCol);

const bfs = (row, col) => {
    queue.enqueue(row);
    queue.enqueue(col);
    matrix[row][col] = matrix[startRow][startCol] + 1;
};
let counter = 0;

while (!queue.isEmpty()) {
    counter++;
    startRow = queue.dequeue();
    startCol = queue.dequeue();
    for (let i = 0; i < 16; i += 2) {
        const newRow = startRow + moves[i];
        const newCol = startCol + moves[i + 1];

        if ((newRow >= 0 && newRow < rows) &&
            (newCol >= 0 && newCol < cols) &&
            matrix[newRow][newCol] === 0) {
            bfs(newRow, newCol);
        }
    }
}
const result = [];
const neededCol = Math.floor(cols / 2);
for (let i = 0; i < rows; i++) {
    result.push(matrix[i][neededCol]);
}
print(result.join('\n'));
print(counter);