const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    // '2 2',
    // '0 1',
    // '1 1',
    // '1 0',
    // '1 1',
    // 'Shoot 1 1',
    // 'Shoot 0 1',
    // 'Shoot 0 0',
    // 'Shoot 0 0',
    // 'Shoot 1 1',
    // 'Shoot 1 0',
    // 'END',
    '3 4',
    '0 1 1 1',
    '1 1 0 0',
    '1 1 0 1',
    '1 0 1 1',
    '1 0 0 0',
    '1 1 1 1',
    'Shoot 2 3',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 0 0',
    'Shoot 1 1',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 2 3',
    'END',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);
const firstPlayerMatrix = Array.from({
    length: rows,
});
const secondPlayerMatrix = Array.from({
    length: rows,
});
let firstPlayerRes = 0;
let secondPlayerRes = 0;
for (let col = 0; col < rows; col++) {
    let input = gets().split(' ').map(Number);
    input.forEach((element) => {
        if (element === 1) {
            firstPlayerRes += 1;
        }
    });
    firstPlayerMatrix[col] = input;
}
for (let col = rows - 1; col >= 0; col--) {
    let input = gets().split(' ').map(Number).reverse();
    input.forEach((element) => {
        if (element === 1) {
            secondPlayerRes += 1;
        }
    });
    secondPlayerMatrix[col] = input;
}
let playerTurn = 0;
while (true) {
    const command = gets().split(' ');
    if (command[0] === 'END') {
        break;
    } else {
        const row = +command[1];
        const col = +command[2];
        if (playerTurn % 2 === 0) {
            if (secondPlayerMatrix[row][col] === 1) {
                secondPlayerRes--;
                secondPlayerMatrix[row][col] = 'x';
                print('Booom ');
            } else if (secondPlayerMatrix[row][col] === 0) {
                secondPlayerMatrix[row][col] = 'x';
                print('Missed');
            } else if (secondPlayerMatrix[row][col] === 'x') {
                print('You already shot there! ');
            }
        } else {
            if (firstPlayerMatrix[row][col] === 1) {
                firstPlayerRes--;
                firstPlayerMatrix[row][col] = 'x';
                print('Booom ');
            } else if (firstPlayerMatrix[row][col] === 0) {
                firstPlayerMatrix[row][col] = 'x';
                print('Missed');
            } else if (firstPlayerMatrix[row][col] === 'x') {
                print('You already shot there! ');
            }
        }
        playerTurn++;
    }
}
print(`${firstPlayerRes}:${secondPlayerRes}`);

/* 
Booom
Booom
Booom
Missed
Missed
You already shot there!
You already shot there!
Booom
6:6 */