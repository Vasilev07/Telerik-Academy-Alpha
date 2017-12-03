const solve = (array) => {
    const n = array[0];
    const arr = [];
    for (let i = 0; i < n; i += 1) {
        const line = array[i];
        array.push(line);
    }

    const holder = {};
    for (const number of array) {
        if (holder[number] === undefined) {
            holder[number] = 0;
        }
        holder[number] += 1;
    }
    let maxElement = 0;
    let maxKey = 0;
    for (const key in holder) {
        if (holder.hasOwnProperty(key)) {
            const element = holder[key];
            if (element > maxElement) {
                maxElement = element;
                maxKey = key;
            }
        }
    }
    console.log((`${maxKey}(${maxElement - 2} times)`));
};
solve([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3, 4, 4]);
