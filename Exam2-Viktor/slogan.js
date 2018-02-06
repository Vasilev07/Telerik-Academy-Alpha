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
    '1122',
    'A1B12C11D2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const generateSlogan = (slogan, availableWords, usedWords, impossibleSlogans) => {
    if (slogan === '') {
        return true;
    }

    if (impossibleSlogans.has(slogan)) {
        return false;
    }

    for (const word of availableWords) {
        if (slogan.startsWith(word)) {
            const restOfSlogan = slogan.substring(word.length);
            if (generateSlogan(restOfSlogan, availableWords, usedWords, impossibleSlogans)) {
                usedWords.push(word);
                return true;
            }
        }
    }

    impossibleSlogans.add(slogan);
    return false;
}

const n = +gets();
for (let i = 0; i < n; i++) {
    const availableWords = gets().split(' ');
    const slogan = gets();

    const usedWords = [];
    const impossibleSlogans = new Set();
    if (generateSlogan(slogan, availableWords, usedWords, impossibleSlogans)) {
        print(usedWords.reverse().join(' '));
    } else {
        print('NOT VALID');
    }
}

/* eslint-disable */