const solve = (range) => {
    const start = +range[0];
    const end = +range[1];

    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }

    const isPrime = (number) => {
        const maxDivider = Math.sqrt(number);
        for (let divider = 2; divider <= maxDivider; divider++) {
            if (number % divider === 0) {
                return false;
            }
        }
        return true;
    };
};
solve([2, 11]);
