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
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = +gets();
const inpuyArray = [];
for (let i = 1; i <= input; i++) {
    inpuyArray.push(i);
}
const generatePermutations = (index, current, used, source, permutations) => {
    if (index === source.length) {
        permutations.push([...current]);
        return;
    }

    for (let i = 0; i < source.length; i += 1) {
        if (used[i]) {
            continue;
        }

        const next = source[i];
        current[index] = next;
        used[i] = true;
        generatePermutations(index + 1, current, used, source, permutations);
        current[index] = next;
        used[i] = false;
    }
};
const perms = [];
generatePermutations(0, [], {}, inpuyArray, perms);
for (const perm of perms) {
    print(perm.join(' '));
}


