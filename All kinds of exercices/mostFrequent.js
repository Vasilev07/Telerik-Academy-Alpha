const solve = (array) => {
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
    console.log(maxElement);
    console.log(maxKey);
};
solve([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
