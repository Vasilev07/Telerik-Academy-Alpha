const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '5',
    '5',
    'Q---Q',
    '-----',
    '-B---',
    '--R--',
    'Q---Q',
    '10',
    'a1 a1',
    'a1 d4',
    'e1 b4',
    'a5 d2',
    'e5 b2',
    'b3 d5',
    'b3 a2',
    'b3 d1',
    'b3 a4',
    'c2 c5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const rows = +gets();
const cols = +gets();

const matrix = [];
for (let i = 0; i < rows; i++) {
    const fields = gets().split('');
    matrix.push(fields);
}
matrix.reverse();
const moves = +gets();

const moveFigure = (fromRow, fromCol, moveRow, moveCol, toRow, toCol) => {
    while (true) {
        fromRow += moveRow;
        fromCol += moveCol;
        if (fromCol < 0 ||
            fromCol >= cols ||
            fromRow < 0 ||
            fromRow >= rows ||
            matrix[fromRow][fromCol] !== '-') {
            return false;
        }
        if (fromRow === toRow && fromCol === toCol) {
            return true;
        }
    }
    return false;
};

const queen = (fromRow, fromCol, toRow, toCol) => {
    let moveRow = 0;
    let moveCol = 0;
    if (fromRow === toRow && fromCol > toCol) {
        moveRow += 0;
        moveCol += -1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow === toRow && fromCol < toCol) {
        moveRow += 0;
        moveCol += 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow > toRow && fromCol === toCol) {
        moveRow -= 1;
        moveCol += 0;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol === toCol) {
        moveRow += 1;
        moveCol += 0;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow > toRow && fromCol > toCol) {
        moveRow += -1;
        moveCol += -1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol < toCol) {
        moveRow += 1;
        moveCol += 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol > toCol) {
        moveRow += 1;
        moveCol -= 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow > toRow && fromCol < toCol) {
        moveRow -= 1;
        moveCol += 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol > toCol) {
        moveRow += 1;
        moveCol -= 1;
        return {
            moveRow,
            moveCol,
        };
    }
    return false;
};

const rook = (fromRow, fromCol, toRow, toCol) => {
    let moveRow = 0;
    let moveCol = 0;
    if (fromRow === toRow && fromCol > toCol) {
        moveRow += 0;
        moveCol += -1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow === toRow && fromCol < toCol) {
        moveRow += 0;
        moveCol += 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow > toRow && fromCol === toCol) {
        moveRow -= 1;
        moveCol += 0;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol === toCol) {
        moveRow += 1;
        moveCol += 0;
        return {
            moveRow,
            moveCol,
        };
    }
    return false;
};

const bishep = (fromRow, fromCol, toRow, toCol) => {
    let moveRow = 0;
    let moveCol = 0;
    if (fromRow > toRow && fromCol > toCol) {
        moveRow += -1;
        moveCol += -1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol < toCol) {
        moveRow += 1;
        moveCol += 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol > toCol) {
        moveRow += 1;
        moveCol -= 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow > toRow && fromCol < toCol) {
        moveRow -= 1;
        moveCol += 1;
        return {
            moveRow,
            moveCol,
        };
    } else if (fromRow < toRow && fromCol > toCol) {
        moveRow += 1;
        moveCol -= 1;
        return {
            moveRow,
            moveCol,
        };
    }
    return false;
};
const result = [];
for (let i = 0; i < moves; i++) {
    const move = gets();
    const from = move.split(' ')[0];
    const to = move.split(' ')[1];

    const fromCol = (from.split('')[0].charCodeAt(0)) - 97;
    const fromRow = from.split('')[1] - 1;

    const toCol = (to.split('')[0].charCodeAt(0)) - 97;
    const toRow = to.split('')[1] - 1;

    const figure = matrix[fromRow][fromCol];

    if (figure === 'Q') {
        const fig = queen(fromRow, fromCol, toRow, toCol);
        if (!fig) {
            result.push('no');
        } else {
            const possibleMove = moveFigure(fromRow, fromCol,
                fig.moveRow, fig.moveCol, toRow, toCol);
            if (possibleMove) {
                result.push('yes');
            } else {
                result.push('no');
            }
        }
    } else if (figure === 'B') {
        const fig = bishep(fromRow, fromCol, toRow, toCol);
        if (!fig) {
            result.push('no');
        } else {
            const possibleMove = moveFigure(fromRow, fromCol,
                fig.moveRow, fig.moveCol, toRow, toCol);
            if (possibleMove) {
                result.push('yes');
            } else {
                result.push('no');
            }
        }
    } else if (figure === 'R') {
        const fig = rook(fromRow, fromCol, toRow, toCol);
        if (!fig) {
            result.push('no');
        } else {
            const possibleMove = moveFigure(fromRow, fromCol,
                fig.moveRow, fig.moveCol, toRow, toCol);
            if (possibleMove) {
                result.push('yes');
            } else {
                result.push('no');
            }
        }
    } else {
        result.push('no');
    }
}
print(result.join('\n'));
