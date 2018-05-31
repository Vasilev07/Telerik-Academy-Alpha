const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '0 0',
    '5 6',
    '1 # 5 4 6 4',
    '3 2 # 2 6 2',
    '9 1 7 6 3 1',
    '8 2 7 3 8 6',
    '3 6 1 3 1 2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [startRow, startCol] = gets().split(' ').map((start) => Number(start));
const [numberRows, numberCols] = gets()
    .split(' ').map((start) => Number(start));

const matrix = [];

for (let r = 0; r < numberRows; r++) {
    const line = gets().split(' ');
    for (let index = 0; index < line.length; index++) {
        if (line[index] !== '#') {
            line[index] = Number(line[index]);
        }
    }
    matrix.push(line);
}


let maxPower = 0;
const dfs = (row, col, currentPower) => {
    if (maxPower < currentPower) {
        maxPower = currentPower;
    }
    const power = matrix[row][col];
    // down
    if (power !== 0) {
        if (row + power < numberRows && matrix[row + power][col] !== '#') {
            currentPower += power;
            matrix[row][col] = 0;
            dfs(row + power, col, currentPower);
            currentPower -= power;
            matrix[row][col] = power;
        }
        // up
        if (row - power >= 0 && matrix[row - power][col] !== '#') {
            currentPower += power;
            matrix[row][col] = 0;
            dfs(row - power, col, currentPower);
            currentPower -= power;
            matrix[row][col] = power;
        }
        // right
        if (col + power < numberCols && matrix[row][col + power] !== '#') {
            currentPower += power;
            matrix[row][col] = 0;
            dfs(row, col + power, currentPower);
            currentPower -= power;
            matrix[row][col] = power;
        }
        // left
        if (col - power >= 0 && matrix[row][col - power] !== '#') {
            currentPower += power;
            matrix[row][col] = 0;
            dfs(row, col - power, currentPower);
            currentPower -= power;
            matrix[row][col] = power;
        }
    }
};

dfs(startRow, startCol, 0);
print(maxPower);
