const solve = (n) => {
    const isPrime = (number) => {
        const maxDivider = Math.sqrt(number);
        for (let divider = 2; divider <= maxDivider; divider++) {
            if (number % divider === 0) {
                return false;
            }
        }
        return true;
    };

    while (isPrime(n)) {
            console.log(n);
            n--;
    }
};
solve(14);
solve(13);
solve(1048576);
