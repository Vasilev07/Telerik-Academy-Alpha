const solve = (arr) => {
    const maxSoFar = 0;
    let leftIndex = 0;
    const rightIndex = arr.length - 1;
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let maxSum = 0;
    for (let j = i; j < len; j++) {
        maxSum += arr[j];
        if (maxSoFar < maxSum) {
            leftIndex = i;
            maxSoFar = maxSum;
            rightIndex = j;
        }
    }
}
console.log(maxSoFar);
};
solve([2, 3, -6, -1, 2, -1, 6, 4, -8, 8]);
