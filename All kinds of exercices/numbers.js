/* eslint-disable */

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
    'set 2',
    'print',
    'front-add 1',
    'print',
    'back-add 2',
    'print',
    'front-remove',
    'print',
    'set 4',
    'print',
    'print',
    'front-add 1',
    'print',
    'back-add 3',
    'print',
    'reverse',
    'print',
    'end',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
let result = [];

while (true) {
    let command = gets().split(' ');
    const commandWord = command[0];
    const value = command[1];

    if (commandWord === 'end') {
        break;
    }

    command = gets().split(' ');
    if (commandWord === 'set') {
        result = [];
        result.push(value);
    } else if (commandWord === 'front-add') {
        result.unshift(value);
    } else if (commandWord === 'back-add') {
        result.push(value);
    } else if (commandWord === 'back-remove') {
        result.pop();
    } else if (commandWord === 'reverse') {
        result = result.reverse();
    } else if (commandWord === 'print') {
        print(result.join(''));
    } else if (commandWord === 'front-remove') {
        result.shift();
    }
}
/* eslint-enable */