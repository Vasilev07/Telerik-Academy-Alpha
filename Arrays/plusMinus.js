const solve = (args) => {
    const n = +args[0];
    args.shift();
    const arr = args.map(Number);

    let zeroCount = 0;
    let minusCount = 0;
    let plusCount = 0;

    for (let i = 0; i < n; i += 1) {
        const currentStatus = arr[i];

        if (currentStatus < 0) {
            minusCount += 1;
        } else if (currentStatus > 0) {
            plusCount += 1;
        } else {
            zeroCount += 1;
        }
    }
    console.log(plusCount / n);
    console.log(minusCount / n);
    console.log(zeroCount / n);
};
solve([6, -4, 3, -9, 0, 4, 1]);
