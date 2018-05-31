const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let best = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[best]) {
                best = j;
            }
        }
        if (best !== i) {
            [arr[i], arr[best]] = [arr[best], arr[i]];
        }
    }
    return arr;
};
console.log(selectionSort([10, 4, 6, 1, 2, 5]));
