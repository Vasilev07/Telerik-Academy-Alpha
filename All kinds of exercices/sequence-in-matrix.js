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
    '6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',

];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets().split(' ').map(Number);
const matrix = [];
const N = n[0];
const M = n[1];
for (let i = 0; i < N; i++) {
    matrix[i] = gets().split(' ').map(Number);
}
let maxCount = 1;
// going right
for (let row = 0; row < N; row++) {
    let count = 1;
    for (let col = 0; col < M - 1; col++) {
        const currentRight = matrix[row][col];
        const nextRight = matrix[row][col + 1];
        if (currentRight === nextRight) {
            count += 1;
            if (maxCount < count) {
                maxCount = count;
            }
        } else {
            count = 1;
        }
    }
}
// going down
let maxCount2 = 1;
for (let col = 0; col < M; col++) {
    let count = 1;
    for (let row = 0; row < N - 1; row++) {
        const currentRight = matrix[row][col];
        const nextRight = matrix[row + 1][col];
        if (currentRight === nextRight) {
            count += 1;
            if (maxCount2 < count) {
                maxCount2 = count;
            }
        } else {
            count = 1;
        }
    }
}
// going through diagonal under main diagonal
for (let row = 1; row < M - 1; row++) {
    for (let col = 1; col < N - 1; col++) {
        let current = matrix[row][col - 1];
        let next = matrix[row + 1][col];
        print(current)
    }
}

print(Math.max(maxCount, maxCount2));

/*
'6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
*/