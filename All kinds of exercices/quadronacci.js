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
    5, -5,
    1,
    2,
    3,
    4,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

/* ------ code starts here ----- */
const input = [];
for (let index = 0; index < 4; index++) {
    input.push(+gets());
}
const rows = +gets();
const cols = +gets();
for (let i = 3, j = 3; i < rows * cols; i++, j++) {
    const next = input[i - 3] + input[i - 2] + input[i - 1] + input[i];
    input.push(next);
}
for (let i = 0; i < rows; i++) {
    for (let index = 0; index < cols; index++) {
        if (index === cols - 1) {
            print(input.splice(0, cols).join(' '));
            break;
        }
    }
}