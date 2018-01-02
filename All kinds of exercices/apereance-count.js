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
    '28 6 21 6 -7856 73 73 -56',
    73,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const sizeOfArray = +gets();
const array = gets().split(' ').map(Number);
const number = +gets();

let counter = 0;
for (let i = 0; i < array.length; i += 1) {
    if (array[i] === number) {
        counter += 1;
    }
}
print(counter);
