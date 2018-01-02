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

const printVariationWithoutRep = (n, k, index, permutation, used) => {
    if (index === k) {
        console.log(permutation.join(' '));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (used[i]) {
            continue;
        }

        permutation[index] = i + 1;
        used[i] = true;
        printVariationWithoutRep(n, k, index + 1, permutation, used);
        used[i] = false;
    }
}
printVariationWithoutRep(n, k, 0, [], {});
