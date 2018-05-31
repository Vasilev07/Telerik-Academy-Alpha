const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '6 7',
    // '5',
    '5',
    'UR 5',
    'RD 2',
    'DL 3',
    'LU 6',
    'DR 5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [row, col] = gets().split(' ');
const matrix = [];

let result = 0;
let startRow = row - 1;
let startCol = 0;
const moveFigure = (func, move) => {
    const fromRow = func.fromRow;
    const fromCol = func.fromCol;

    for (let index = 0; index < move - 1; index++) {
        startRow += fromRow;
        startCol += fromCol;
        if (startRow < 0 ||
            startCol < 0 ||
            startCol >= col ||
            startRow >= row) {
            startRow -= fromRow;
            startCol -= fromCol;
            break;
        }
        result += matrix[startRow][startCol];
        matrix[startRow][startCol] = 0;
    }
};

const upRight = () => {
    const fromRow = -1;
    const fromCol = 1;

    return {
        fromRow,
        fromCol,
    };
};

const upLeft = () => {
    const fromRow = -1;
    const fromCol = -1;

    return {
        fromRow,
        fromCol,
    };
};

const downRight = () => {
    const fromRow = 1;
    const fromCol = 1;

    return {
        fromRow,
        fromCol,
    };
};

const downLeft = () => {
    const fromRow = 1;
    const fromCol = -1;

    return {
        fromRow,
        fromCol,
    };
};

for (let r = 0; r < +row; r++) {
    matrix.push([]);
    for (let c = 0; c < +col; c++) {
        const currentNumber = ((+row + c) - r - 1) * 3;
        matrix[r].push(currentNumber);
    }
}

const moves = +gets();


for (let i = 0; i < moves; i++) {
    const [dir, move] = gets().split(' ');

    if (dir === 'RU' || dir === 'UR') {
        moveFigure(upRight(), +move);
    } else if (dir === 'LU' || dir === 'UL') {
        moveFigure(upLeft(), +move);
    } else if (dir === 'DL' || dir === 'LD') {
        moveFigure(downLeft(), +move);
    } else {
        moveFigure(downRight(), +move);
    }
}
print(result);