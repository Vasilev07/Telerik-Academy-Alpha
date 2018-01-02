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
    '-28 -26 -24 31 32 333',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const num = +gets();
const arr = gets().split(' ').map(Number);

const firstLargestThan = (arr) => {
    for (let i = 0; i < num; i++) {
        const prev = arr[i];
        const current = arr[i + 1];
        const next = arr[i + 2];
        if (prev < current && next < current) {
            return arr.indexOf(current);
        }
    }
    return -1;
}
print(firstLargestThan(arr));