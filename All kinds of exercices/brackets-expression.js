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
    '5 * (123 * (1 + 3) + ((4 - 3) / 6))',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const exp = gets();
const stack = [];
for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
        stack.push(i);
    }
    if (exp[i] === ')') {
        print(exp.slice(stack.pop(), i + 1));
    }
}
