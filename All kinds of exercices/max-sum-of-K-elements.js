const solve = (array) => {
    const n = array.shift();
    const k = array.shift();
    let sum = 0;
    for (let i = 0; i < k; i++) {
        const currentBiggestNum = Math.max(...array);
        sum += currentBiggestNum;
        const biggestNumIndex = array.indexOf(currentBiggestNum);
        array.splice(biggestNumIndex, 1);
    }

    console.log(sum);
};
// 3,2,3,-2,5,4,2,7
// 0 1 2  3 4 5 6 7
solve([8, 3, 3, 2, 3, -2, 5, 4, 2, 7]);
