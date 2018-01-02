const factorial = (n) => {
    // this is the bootom of the recursion
    if (n === 0 || n === 1) {
        return 1;
    }
    return factorial(n - 1) * n;
};
factorial(5);

const reverseString = (str) => {
    if (str.length === 0) {
        return str;
    }

    const reversed = reverseString(str.substr(1)) + str[0];

    return reversed;
};
console.log(reverseString('cska-sofia'));

const generatePermutations = (index, current, used, source, permutations) => {
    if (index === source.length) {
        permutations.push([...current]);
        return;
    }

    for (let i = 0; i < source.length; i += 1) {
        if (used[i]) {
            continue;
        }

        const next = source[i];
        current[index] = next;
        used[i] = true;
        generatePermutations(index + 1, current, used, source, permutations);
        current[index] = next;
        used[i] = false;
    }
};
