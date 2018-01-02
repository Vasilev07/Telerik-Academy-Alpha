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
    '185',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numberAsArray = gets().split('').map(Number);
const holder = [];
const sum = numberAsArray[0] + numberAsArray[1] + numberAsArray[2];
holder.push(sum);
const firstMultiply = numberAsArray[0] * numberAsArray[1] + numberAsArray[2];
holder.push(firstMultiply);
const secondMulti = numberAsArray[0] + numberAsArray[1] * numberAsArray[2];
holder.push(secondMulti);
const allMulty = numberAsArray[0] * numberAsArray[1] * numberAsArray[2];
holder.push(allMulty);
print(Math.max(...holder));