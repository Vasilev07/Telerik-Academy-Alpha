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
    '12ab34b56d4b',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().split('');
input.reverse();
input += '';
input = input.replace(/[^\D]/g, '');
input = input.split(',');

let holder = '';
for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
        continue;
    } else {
        holder += input[i];
    }
}
print(holder);
