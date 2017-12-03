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
    5,
    2,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const command = gets();
if (command === 'text') {
    let string = gets();
    string += '*';
    print(string);
} else if (command === 'real') {
    let double = +gets();
    double += 1;
    print(double.toFixed(2));
} else {
    let number = +gets();
    number += 1;
    print(number);
}
