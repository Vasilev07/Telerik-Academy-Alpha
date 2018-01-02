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
    '123456 4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ');
const firstPart = input[0].split('').reverse().map(Number);
const holder = firstPart.join('');

const secondPart = +input[1];

const firstRes = Math.floor(Number(holder) / secondPart);
const secondRes = +holder % secondPart;
const res = firstRes + secondRes;
print(res);

