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
    '6',
    '-26 -25 -28 31 2 27',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const array = gets().split(' ').map(Number);
let counter = 0;
for (let i = 1; i < array.length - 1; i++) {
    let prev = array[i - 1];
    let curr = array[i];
    let next = array[i + 1];
    if (prev < curr && curr > next) {
        counter++;
    }
    prev = curr;
    curr = next;
}
print(counter);
