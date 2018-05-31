const getPivotIndex = (arr) => arr.length / 2 | 0;

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const currentPivotInex = getPivotIndex(arr);
    const pivot = arr[currentPivotInex];
    let left = [];
    let right = [];

    for (let i = 0; i < currentPivotInex; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    for (let i = currentPivotInex + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
};
console.log(quickSort([4, 7, 8, 1, 3, 2, 9]));
