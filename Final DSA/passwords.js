const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '7',
    '<=>>=<',
    '23',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const moves = '>' + gets();
const k = +gets();

const combination = [];
let counter = 0;

const recursion = (number, index) => {
    if (index === n) {
        counter++;
        if (counter === k) {
           qut
            return;
        }
        return;
    }
    const move = moves[index];
    if (move === '=') {
        combination.push(number);
        recursion(number, index + 1);
        combination.pop();
    }
    if (move === '<') {
        let end;
        if (number === 0) {
            end = 10;
        } else {
            end = number;
        }
        for (let i = 1; i < end; i++) {
            combination.push(i);
            recursion(i, index + 1);
            combination.pop();
        }
    }
    if (move === '>') {
        if (number === 0) {
            return;
        }

        if (number !== -1) {
            combination.push(0);
            recursion(0, index + 1);
            combination.pop();
        }

        for (let i = number + 1; i <= 9; i++) {
            combination.push(i);
            recursion(i, index + 1);
            combination.pop();
        }
    }
};

recursion(-1, 0);

