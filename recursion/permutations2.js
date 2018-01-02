const printPermutation = (n, index, permutation, used) => {
    if (index === n) {
        console.log(permutation.join(' '));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (used[i]) {
            continue;
        }

        permutation[index] = i + 1;
        used[i] = true;
        printPermutation(n, index + 1, permutation, used);
        used[i] = false;
    }
}
printPermutation(3, 0, [], {});