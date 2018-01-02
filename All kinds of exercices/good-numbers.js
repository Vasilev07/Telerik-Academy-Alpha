const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '256 768',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

/ --------------- code start here ------------------ /

const input = gets().split(' ').map(Number);
const a = +input[0];
const b = +input[1];

let counter = 0;
for (let i = a; i <= b; i += 1) {
    const currentNumber = i + '';
    let canBeDivided = false;
    for (let index = 0; index < currentNumber.length; index++) {
        if (+currentNumber % +currentNumber[index] === 0 || +currentNumber[index] === 0) {
            canBeDivided = true;
            continue;
        } else {
            canBeDivided = false;
            break;
        }
    }
    if (canBeDivided) {
        counter += 1;
    }
}
print(counter);