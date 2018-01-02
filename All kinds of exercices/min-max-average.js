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
    3,
    2,
    -1,
    4,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const mmsa = +gets();
const holder = [];
for (let i = 0; i < mmsa; i += 1) {
    const currentLine = +gets();
    holder.push(currentLine);
}
const maxMinSumAverage = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((x, y) => x + y, 0);
    const average = sum / arr.length;
    print(`min=${min.toFixed(2)}`);
    print(`max=${max.toFixed(2)}`);
    print(`sum=${sum.toFixed(2)}`);
    print(`avg=${average.toFixed(2)}`);
};
maxMinSumAverage(holder);

// submit AGGAIN!!!
