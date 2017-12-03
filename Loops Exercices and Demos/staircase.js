const solve = (n) => {
    for (let row = 1; row <= n; row++) {
       let line = '';
        line += (' ').repeat(n-row);
        line += '#'.repeat(row);
        console.log(line);
    }
};
solve(6);
