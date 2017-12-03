/* eslint-disable */
const numbers = [2, 1, 2, 4, 3, 5, 2, 6];
let s = 14;

const sums = Array.from({
    lenght: s
}).fill(false);

sums[0] = true;

for (const number of numbers) {
    for (let sum = s; sum > 0; sum -= 1) {
        if (sums[sum]) {
            let newSum = sum + number;
            if (newSum > s) {
                continue;
            }
            sums[newSum] = true;
        }
    }
}
if(sums){
    console.log('yes');
}else{
    console.log('no')
}

let arr = '4 5 5 7';
let ar = [];

arr.split(' ').push();
console.log(arr);