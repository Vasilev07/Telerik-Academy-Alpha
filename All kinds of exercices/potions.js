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
    '10 5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ').map(Number);
const potions = input[0];
const quatityOfPoition = input[1];

let currentLiters = 1;
for (let i = 1; i < potions; i++) {
    currentLiters += i;
    if (currentLiters >= quatityOfPoition && i % 2 === 0) {
        print(i + 1);
        break;
    }
    if (currentLiters >= quatityOfPoition && i % 2 !== 0) {
        print(i);
        break;
    }
}
