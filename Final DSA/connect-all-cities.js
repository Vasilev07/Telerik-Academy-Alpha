/* globals Set */
/* eslint-disable */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
    '2',
    '01',
    '10',
    '5',
    '01100',
    '10100',
    '11000',
    '00001',
    '00010',
    '6',
    '010000',
    '101000',
    '010100',
    '001000',
    '000001',
    '000010',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

/* eslint-enable */

const tests = +gets();

const used = new Set();

let matrix = [];
let numberOfCities = 0;
let connections = 0;
let countries = [];

const citiesConnections = (row) => {
    used.add(row);
    for (let j = 0; j < numberOfCities; j += 1) {
        if (matrix[row][j] === 1) {
            connections += 1;
            if (!used.has(j)) {
                countries[countries.length - 1] += 1;
                citiesConnections(j);
            }
        }
    }
};

for (let k = 0; k < tests; k += 1) {
    countries = [];
    used.clear();
    connections = 0;
    numberOfCities = +gets();

    matrix = Array.from({
        length: numberOfCities,
    });

    for (let index = 0; index < matrix.length; index++) {
        matrix[index] = gets().split('').map(Number);
    }

    for (let i = 0; i < numberOfCities; i += 1) {
        if (!used.has(i)) {
            countries.push(1);
            citiesConnections(i);
        }
    }

    connections = connections / 2;
    let moves = -1;
    let isPossible = true;

    if (connections < numberOfCities - 1) {
        isPossible = false;
    } else {
        countries.forEach((block) => {
            if (block === 1) {
                isPossible = false;
                return;
            }
            moves += 1;
        });
    }

    if (isPossible) {
        print(moves);
    } else {
        print(-1);
    }
}
