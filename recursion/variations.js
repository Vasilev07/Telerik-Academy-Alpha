const printVariationWithoutRep = (n, k, index, permutation, used) => {
    if (index === k) {
        console.log(permutation.join(' '));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (used[i]) {
            continue;
        }

        permutation[index] = i + 1;
        used[i] = true;
        printVariationWithoutRep(n, k, index + 1, permutation, used);
        used[i] = false;
    }
}