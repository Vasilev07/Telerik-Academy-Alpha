const arrayToSort = [5, 4, 2, 1, 3];

const bubbleSort = (arr) => {
    let isSwapDone = true;
    while (isSwapDone) {
        isSwapDone = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSwapDone = true;
            }
        }
    }

    return arr;
};
console.log(bubbleSort(arrayToSort));
