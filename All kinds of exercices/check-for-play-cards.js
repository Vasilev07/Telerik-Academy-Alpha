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
    '23',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const cards = gets();
const checkForCard = (card) => {
    switch (card) {
        case '2': print(`yes ${card}`);
        break;
        case '3': print(`yes ${card}`);
        break;
        case '4': print(`yes ${card}`);
        break;
        case '5': print(`yes ${card}`);
        break;
        case '6': print(`yes ${card}`);
        break;
        case '7': print(`yes ${card}`);
        break;
        case '8': print(`yes ${card}`);
        break;
        case '9': print(`yes ${card}`);
        break;
        case '10': print(`yes ${card}`);
        break;
        case 'J': print(`yes ${card}`);
        break;
        case 'Q': print(`yes ${card}`);
        break;
        case 'K': print(`yes ${card}`);
        break;
        case 'A': print(`yes ${card}`);
        break;
        default: print(`no ${card}`);
        break;
    }
};
checkForCard(cards);
