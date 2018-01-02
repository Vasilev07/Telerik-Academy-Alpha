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
    '28,1,45,255',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const dec2bin = (dec, length) => {
    let out = '';
    while (length--) {
        out += (dec >> length) & 1;
    }
    return out;
}

const input = gets().split(',').map(Number);
const result = [];
for (let i = 0; i < input.length; i++) {
    const currentDecimal = input[i];
    const currentBinRepresent = dec2bin(currentDecimal, 8);
    if (i % 2 === 0) {
        for (let j = 1; j < 8; j += 2) {
            result.push(currentBinRepresent[j]);
        }
    } else {
        for (let j = 0; j < 8; j += 2) {
            result.push(currentBinRepresent[j]);
        }
    }
}
print(result.join(''));

