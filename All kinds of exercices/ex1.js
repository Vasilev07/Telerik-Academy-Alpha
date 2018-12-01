const interval = [];

const letters = {
    'a': 5,
    'b': -12,
    'c': 47,
    'd': 7,
    'e': -32,
};

const lettersArray = Object.keys(letters);
console.log(lettersArray);

const result = [];

const combination = (array, length) => {
    const currentCombination = Array.from({ length });
    const letterCombinations = (position, start) => {
        if (position === length) {
            result.push(currentCombination);
            return;
        }

        for (let index = start; index < lettersArray; index++) {
            currentCombination[position] += lettersArray[index];
            letterCombinations(position + 1, index);
        }
    };

    letterCombinations(0, 0);
};
console.log(result);

combination(lettersArray, 5);


const countWeight = (letter, weight, currentNumberInInterval) => {
    currentNumberInInterval -= weight;
    if (weight <= 0) {
        return;
    }


    currentCombinaton += letter;
};