const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    20,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = +gets();

const multiply = (a, b) => {
    if ((a | 0) === '0' || (b | 0) === '0') {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0; a[i] >= 0; i++) {
        for (let j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10, 0);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
};

if (number === 0 || number === 1) {
    print(1);
} else {
    const factorial = (n) => {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = multiply(result.toString(), i.toString());
        }
        return result;
    };
    print(factorial(number));
}