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
    '2',
    '1232',
    '2523',
    // '5842',
    // '7719',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();
const result = [];
for (let index = 0; index < n; index++) {
    let currentDirection = gets();
    currentDirection = currentDirection.split('').map((num) => Number(num));
    let even = 0;
    let odd = 0;
    for (let k = 0; k < currentDirection.length; k++) {
        if (currentDirection[k] % 2 === 0) {
            even += currentDirection[k];
        } else {
            odd += currentDirection[k];
        }
    }
    if (even > odd) {
        result.push('left');
    } else if (even < odd) {
        result.push('right');
    } else {
        result.push('straight');
    }
}
print(result.join('\n'));
