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
    4,
    4,
    4,
    3,
    1,
    2,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const first = +gets();
const second = +gets();
const third = +gets();
const fourth = +gets();
const fifth = +gets();

if (first >= second && first >= third && first >= fourth && first >= fifth) {
    print(first);
} else if (second >= first && second >= third && second >= fourth && second >= fifth) {
    print(second);
} else if (third >= first && third >= second && third >= fourth && third >= fifth) {
    print(third);
} else if (fourth >= first && fourth >= third && fourth >= second && fourth >= fifth) {
    print(fourth);
} else if (fifth >= first && fifth >= third && fifth >= fourth && second <= fifth) {
    print(fifth);
}