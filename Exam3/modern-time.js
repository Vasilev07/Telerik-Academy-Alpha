/* eslint-disable */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '4',
    'Bay Tele, the big Rik',
    'm',
    '3',
    'salatka, rakia, salatka',
    'Master Windu',
    'm',
    '2',
    'The Force, Purple Lightsabers',
    'Aunt Penka',
    'f',
    '3',
    'rakia, salatka, salatka',
    'Uncle Gosho',
    'm',
    '2',
    'rakia, salatka',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let studentsMale = [];
let studentsFemale = [];

let students = +gets();
for (let i = 0; i < students; i++) {
    let name = gets();
    let gender = gets(); +
    gets();
    let interest = gets().split(',');
    let interestCount = [];

    for (let i = 0; i < interest.length - 1; i++) {
        let currentInterest = interest[i];
        let counter = 1;
        for (let k = 1; k < interest.length; k++) {
            let next = interest[k];
            if (currentInterest === next) {
                counter++;
            }
        }

        interestCount.push({
            currentInterest,
            counter
        });
        counter = 1;
    }
    if (gender === 'm') {
        studentsMale.push({
            name,
            gender,
            interestCount,
        });

    } else {
        studentsFemale.push({
            name,
            gender,
            interestCount,
        });
    }
}
let bestInterest = [];
for (let i = 0; i < studentsMale.length; i++) {
    let currentMale = studentsMale[i];
    let currentMaleInterests = currentMale.interestCount;
    for (let k = 0; k < studentsFemale.length; k++) {
        let currentFemale = studentsFemale[k];
        let currentFemaleInterests = currentFemale.interestCount;
        currentMaleInterests.forEach(mint => {
            currentFemaleInterests.forEach(fint => {
                for (const key in mint) {
                    let currentMInt = mint;
                    for (const kv in fint) {
                        let currentFInt = fint;
                        if (currentMInt === currentFInt) {
                            bestInterest.push(currentFInt.counter + currentMInt.counter);
                        }
                    }
                }
            });
        });
    }
}

print(bestInterest);