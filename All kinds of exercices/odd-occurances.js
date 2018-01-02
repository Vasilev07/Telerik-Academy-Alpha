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
    1,
    2,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const holder = [];
for (let i = 0; i < n; i++) {
    holder.push(gets());
}

const wordsCounts = new Map();
holder.forEach((word) => {
    const count = wordsCounts.get(word) || 0;
    wordsCounts.set(word, count + 1);
});

for (const key of wordsCounts) {
    if (key[1] % 2 !== 0) {
        print(key[0]);
        break;
    }
}