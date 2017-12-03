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
    'FE',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let hex = gets();
const hexToDec = (hex) => {
    let result = 0;
    let digitValue = '';
    hex = hex.toLowerCase();
    for (let i = 0; i < hex.length; i++) {
        digitValue = '0123456789abcdefgh'.indexOf(hex[i]);
        result = result * 16 + digitValue;
    }
    return result;
};
print(hexToDec(hex));
