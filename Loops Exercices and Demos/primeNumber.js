const solve = (n) => {
    const isPrime = (x) => {
        const maxDivider = Math.sqrt(x);
        for (let divider = 2; divider <= maxDivider; divider++) {
            if (x % divider === 0) {
                return false;
            }
        }
        return true;
    };
    return isPrime(n);
};
console.log(solve(7));
