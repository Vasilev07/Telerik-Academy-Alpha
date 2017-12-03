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
    'K',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const card = gets();

const colors = (c) => {
    print(`${c} of spades, ${c} of clubs, ${c} of hearts, ${c} of diamonds`);
};

const deck = (symbol) => {
    if (symbol === 'J') {
        symbol = 11;
    } else if (symbol === 'Q') {
        symbol = 12;
    } else if (symbol === 'K') {
        symbol = 13;
    } else if (symbol === 'A') {
        symbol = 14;
    }
    for (let index = 2; index <= symbol; index++) {
        if (index === 11) {
            const s = 'J';
            colors(s);
        } else if (index === 12) {
            const s = 'Q';
           colors(s);
        } else if (index === 13) {
            const s = 'K';
            colors(s);
        } else if (index === 14) {
            const s = 'A';
            colors(s);
        } else {
            colors(index);
        }
    }
};
deck(card);
