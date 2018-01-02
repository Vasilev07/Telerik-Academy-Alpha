const arr = [3, 5, 1, 5, 5];
arr.sort((a, b) => a - b);

const printPermutationWithRep = (arr, start, n) => {
    console.log(arr.join(' '));
    for (let left = n - 2; left >= start; left--) {
        for (let right = left + 1; right < n; right++) {
            if (arr[left] != arr[right]) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                printPermutationWithRep(arr, left + 1, n);
            }
        }

        const firstElement = arr[left];
        for (let i = left; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr[n - 1] = firstElement;
    }
}

printPermutationWithRep(arr, 0, arr.length);
