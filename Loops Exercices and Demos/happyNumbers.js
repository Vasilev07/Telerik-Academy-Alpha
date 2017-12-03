// first way
const firstWay = (n) => {
    for (let i = 1000; i <= 9999; i += 1) {
        const a = parseInt(0, i / 1000);
        const b = parseInt(0, (i / 100) % 10);
        const c = parseInt(0, (i / 10) % 10);
        const d = parseInt(0, i % 10);

        const ab = a + b;
        const cd = c + d;
        if (ab === cd) {
            console.log(i);
        }
    }
};
const secondWay = (n) => {
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                for (let l = 0; l < 10; l++) {
                    if (i+j === k + l) {
                        console.log(`${i}${j}${k}${l}`);
                    }
                }
            }
        }
    }
};

const thirdWay = (n) => {
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                const fourthNum = i + j - k;
                if (fourthNum >= 0 && fourthNum < 10) {
                    console.log(`${i}${j}${k}${fourthNum}`);
                }
            }
        }
    }
};
