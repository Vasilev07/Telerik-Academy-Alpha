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
    'K',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const x = +gets();
const y = +gets();
const z = +gets();

if (x > y && x > z) {
    if (y >= z) {
        print(`${x}${y}${z}`);
    } else {
        print(`${x}${z}${y}`);
    }
} else if (y > x && y > z) {
    if (x >= z) {
        print(`${y}${x}${z}`);
    } else {
        print(`${y}${z}${x}`);
    }
} else if (z > x && z > y) {
    if (x >= y) {
        print(`${z}${x}${y}`);
    } else {
        print(`${z}${y}${x}`);
    }
}
