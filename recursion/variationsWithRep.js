const printVariationWithRep = (n, k, index, permutation) => {
    if (index === k) {
        console.log(permutation.join(' '));
        return;
    }

    for (let i = 0; i < n; i++) {
        permutation[index] = i + 1;
        printVariationWithRep(n, k, index + 1, permutation);
    }
}