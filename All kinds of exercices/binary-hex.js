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
    '000110100010101100111100010011010101111001101111',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const binary = gets();
const binToHexDict = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F',
};

if (binary.length % 4 !== 0) {
    for (let i = binary.length % 4; i < 4; i++) {
        binary += '0' + binary;
    }
}

const result = [];
for (let i = 0; i < binary.length; i += 4) {
    result.push(binToHexDict[binary.substring(i, i + 4)]);
}
print(result.join(''));