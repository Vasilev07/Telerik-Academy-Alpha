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
    '3 2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ').map(Number);
const n = input[0];
const k = input[1];

const printCombinationWithoutRep = (n, k, index, combination) => {
    if (index === k) {
        print(combination.join(' '));
        return;
    }

    const start = index ? combination[index - 1] : 1;
    for (let i = start; i <= n; i++) {
        combination[index] = i;
        printCombinationWithoutRep(n, k, index + 1, combination);
    }
}
printCombinationWithoutRep(n, k, 0, []);