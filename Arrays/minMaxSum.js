const solve = (array) => {
    const min = Math.min(...array);
    const max = Math.max(...array);

    const holder = [];

    const minIndex = array.indexOf(min);
    const minIndexDelete = array.splice(minIndex, 1);

    const maxSum = array.reduce((x, y) => x + y);
    // console.log(maxSum);
    holder.push(maxSum);
    array.push(minIndexDelete[0]);

    const maxIndex = array.indexOf(max);
    const maxIndexDelete = array.splice(maxIndex, 1);

    const minSum = array.reduce((x, y) => x + y);
    // console.log(minSum);
    holder.push(minSum);

    console.log(holder.reverse().join(' '));
};
solve([1, 2, 3, 4, 5]);
