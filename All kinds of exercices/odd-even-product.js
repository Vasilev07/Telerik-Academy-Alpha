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
    '23',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

/* ------ code starts here ----- */
const n = +gets();
const numbers = gets().split(' ').map(Number);

let oddProduct = 1;
let evenProduct = 1;

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
};

for (let i = 0; i < numbers.length; i += 1) {
    const numberPosition = i + 1;
    if (isEven(numberPosition)) {
        evenProduct *= numbers[i];
    } else {
        oddProduct *= numbers[i];
    }
}

if (oddProduct === evenProduct) {
    print(`yes ${evenProduct}`);
} else {
    print(`no ${oddProduct} ${evenProduct}`);
}
