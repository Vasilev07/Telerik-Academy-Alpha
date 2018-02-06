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
    '2{z10{xy}}',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
// ---------------------------------------
const input = [...gets()];
let decoded = '';
let repeat = 0;
const expresionToRepeat = [];
input.forEach((char) => {
    if (char === '{') {
        expresionToRepeat.push({
            decoded,
            repeat,
        });
        decoded = '';
        repeat = 0;
    } else if (char === '}') {
        const holder = expresionToRepeat.pop();
        decoded = holder.decoded + decoded.repeat(holder.repeat);
    } else if (!isNaN(char)) {
        repeat = repeat * 10 + (+char);
    } else {
        decoded += char;
    }
});
print(decoded);
