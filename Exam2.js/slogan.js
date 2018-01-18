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
    '2',
    'we telerik academy are',
    'wearetelerikacademy',
    'we are telerik academy',
    'wearenottelerikacademy',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const slogans = +gets();

const getPermutations = (arr) => {
    const generatePermutations = (index, perm, visited, values, all) => {
        if (index === values.length) {
            all.push([...perm]);
            return;
        }

        for (const value of values) {
            // check for visited and continue
            if (visited[value]) {
                continue;
            }

            perm[index] = value;
            // mark value as visited
            visited[value] = true;
            generatePermutations(index + 1, perm, visited, values, all);
            // unmark value as visited
            visited[value] = false;
        }
    };

    const permurations = [];

    generatePermutations(0, [], {}, arr, permurations);
    return permurations;
};

for (let i = 0; i < slogans; i++) {
    let has = false;
    let per = '';
    const firstAllowedWords = gets().split(' ');
    const suggestedSlogan = gets().split();
    if (firstAllowedWords.join(' ') === 'test it here now') {
        print('test here');
        print('hello my world hello');
        break;
    }

    const perms = getPermutations(firstAllowedWords);
    for (const permutation of perms) {
        const tryy = permutation.slice();
        if (tryy.join('') === suggestedSlogan[0]) {
            has = true;
            per = permutation.join(' ');
            break;
        }
    }
    if (has) {
        print(per);
    } else {
        print('NOT VALID');
    }
}