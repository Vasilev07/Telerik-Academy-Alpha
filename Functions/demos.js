const printSum = (array) => {
    let sum = 0;
    for (const numbers of array) {
        sum += numbers;
    }
    return sum;
};
console.log(printSum([1, 2, 3]));

const createTriangleOfNumbers = (n) =>{
    let line = '';
    for (let i = 1; i < n + 1; i += 1) {
        line += i;
    }
    console.log(line.trim());
};
console.log(createTriangleOfNumbers(5));

const printTriangle = (n) => {
    for (let i = 0; i < n + 1; i += 1) {
       createTriangleOfNumbers(i);
    }
    for (let i = n - 1; i >= 0; i -= 1) {
        createTriangleOfNumbers(i);
    }
};
printTriangle(5);

const range = (lenght) => {
    const arr = [];
    for (let i = 0; i < lenght; i++) {
        arr.push(getRandom(i, lenght));
    }
    return arr;
};

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(range(5));


