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
const checkBonus = (number) => {
    switch (number) {
        case 1:
        case 2:
        case 3:
            print(number *= 10);
            break;
        case 4:
        case 5:
        case 6:
            print(number *= 100);
            break;
        case 7:
        case 8:
        case 9:
            print(number *= 1000);
            break;
        default:
            print('invalid score');
            break;
    }
};
checkBonus(input);
