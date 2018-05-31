/* globals Set */
/* eslint-disable */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
    'baca',
    '2',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

/* eslint-enable */
const shirts = +gets();
const skirts = gets().split('').sort();
const girls = +gets();
const combinationOfShirts = [];
const combinationOfSkirts = [];

const used = new Set();
const filterLetters = new Set();
const printCombinationWithoutRep = (n, index, combination) => {
    if (index === n) {
        console.log(combination.join(' '));
        combinationOfShirts.push([...combination]);
        return;
    }

    const start = index ? combination[index - 1] + 1 : 0;
    for (let i = start; i < shirts; i++) {
        combination[index] = i;
        printCombinationWithoutRep(n, index + 1, combination);
    }
};

printCombinationWithoutRep(girls, 0, []);

const printVariationWithRep = (n, index, combinations) => {
    if (index === n) {
        const combination = combinations.join(' ');
        if (used.has(combination)) {
            used.add(combination);
            combinationOfSkirts.push([...combinations]);
        }
        return;
    }

    for (let i = 0; i < skirts.length; i++) {
        if (!filterLetters.has(i));
        combinations[index] = skirts[i];
        filterLetters.add(i);
        printVariationWithRep(n, index + 1, combinations);
        filterLetters.delete(i);
    }
};


printVariationWithRep(girls, 0, []);

print(combinationOfSkirts);
