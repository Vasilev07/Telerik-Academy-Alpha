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
    '4{a}2{xz}',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let exp = gets().split('');
let stack = [];
let finalStack = [];
for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '{') {
        stack.push(i);
    }
    if (exp[i] === '}') {
        print(stack.push(exp.slice(stack.pop(), i + 1));
    }
}
print(exp);
