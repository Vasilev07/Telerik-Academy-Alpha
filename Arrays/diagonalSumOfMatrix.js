const solve = (matrix) => {
    const a = +matrix;

    let nextNum = a.length - 1;
    let prime = 0;
    for (let i = 0; i < a.length; i += 1) {
        prime += a[i][nextNum];
        nextNum--;
    }


    let prevNum = a.length - 1;
    let second = 0;

    for (let k = a.length - 1; k >= 0; k--) {
        second += a[k][prevNum];
        prevNum--;
    }

    console.log(Math.abs(prime - second));
};
solve([11, 2, 4,
    4, 5, 6,
    10, 8, -12,
]);
