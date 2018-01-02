const bubbleSort = (arr) => {
    let isSwapDone = false;
    while (!isSwapDone) {
        isSwapDone = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSwapDone = false;
            }
        }
    }

    return arr;
};
console.log(bubbleSort([5, 4, 2, 1, 3]));
