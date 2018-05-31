let neshto = 0;
const merge = (left, right) => {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    neshto = neshto + i + j;
    return result;
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.trunc(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
};

console.log(mergeSort([3, 1, 2, 2, 8, 7]));
console.log(neshto);