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
    6,
    1,
    2,
    3,
    1,
    2,
    1,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const num = +gets();
const modeMap = new Map();
let maxCount = 0;
for (let i = 0; i < num; i++) {
    const element = gets();
    const count = modeMap.get(element) || 0;
    modeMap.set(element, count + 1);
    if (modeMap.get(element) > maxCount) {
        maxCount = modeMap.get(element);
    }
}

for (const iterator of modeMap) {
    if (iterator[1] === maxCount) {
        print(iterator[0]);
        break;
    }
}