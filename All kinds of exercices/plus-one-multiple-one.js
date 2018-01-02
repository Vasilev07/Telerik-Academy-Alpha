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
    '2 4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ').map(Number);
const n = input[0];
const m = input[1];

const result = [];
result.push(n);
for (let i = 0; i < 20; i++) {
    result.push(result[i] + 1);
    result.push(2*result[i] + 1);
    result.push(result[i] + 2);
}
print(result[m-1]);
