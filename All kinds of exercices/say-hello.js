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
    '123.45',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let name = gets();
const sayHello = (nameOfHuman) => {
    return `Hello, ${nameOfHuman}!`;
};
print(sayHello(name));