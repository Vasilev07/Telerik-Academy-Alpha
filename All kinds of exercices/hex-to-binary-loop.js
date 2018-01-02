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
    '1A2B3C4D5E6F',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const hexValues = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111',
};
const input = gets();

const arr = [];

for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    for (const key in hexValues) {
        if (currentElement === key) {
            arr.push(hexValues[key]);
        }
    }
}


let result = '';
for (const element of arr) {
    result += element;
}
print(result.replace(/^0+/, ''));
