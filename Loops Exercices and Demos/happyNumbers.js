//first way 
function firstWay() {
    for (let i = 1000; i <= 9999; i += 1) {
        let a = parseInt(i / 1000);
        let b = parseInt((i / 100) % 10);
        let c = parseInt((i / 10) % 10);
        let d = parseInt(i % 10);

        let ab = a + b;
        let cd = c + d;
        if (ab == cd) {
            console.log(i);
        }

    }
}

function secondWay(){
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                for (let l = 0; l < 10; l++) {
                    if(i+j == k + l){
                        console.log(`${i}${j}${k}${l}`);
                    }
                }
            }
        }
    }
}

function thirdWay(){
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                let fourthNum = i + j - k;
                if(fourthNum >= 0 && fourthNum < 10){
                    console.log(`${i}${j}${k}${fourthNum}`)
                }
            }
        }
    }
}