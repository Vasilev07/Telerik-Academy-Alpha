const solve = (n) => {
    // first way
    for (let row = 1; row <= n; row += 1) {
        let line = '';
        for (let col = 1; col <= row; col += 1) {
            line += col + ' ';
        }
        console.log(line);
    }
    // second way
    let line = '';
    for (let i = 1; i <= n; i++) {
        line += i + ' ';
        console.log(line);
    }
};
solve(10);
