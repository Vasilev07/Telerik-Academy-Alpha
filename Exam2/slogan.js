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
    // '2',
    // 'we telerik academy are',
    // 'wearetelerikacademy',
    // 'we are telerik academy',
    // 'wearenottelerikacademy',
    '2',
    'test it here now',
    'testhere',
    'hello world my',
    'hellomyworldhello',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const generateSlogan = (slogan, availableWords, usedWords, decoded) => {
    if (slogan.length === 0) {
        usedWords.push(decoded.trim());
        return;
    }

    for (const word of availableWords) {
        if (slogan.startsWith(word)) {
            generateSlogan(slogan.substring(word.length), availableWords, usedWords, decoded + word + ' ');
        }
    }
}

const n = +gets();
for (let i = 0; i < n; i++) {
    const availableWords = gets().split(' ');
    const slogan = gets();

    const usedWords = [];
    generateSlogan(slogan, availableWords, usedWords, '');
    if (usedWords.length > 0) {
        print(usedWords[0]);
    } else {
        print('NOT VALID');
    }
}

/* eslint-disable */