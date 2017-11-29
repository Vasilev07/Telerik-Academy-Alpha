/*
ou must print the following  lines:

A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeroes in the array compared to its size.
*/
function main(args) {
    let n = +args[0];
    args.shift();
    let arr = args.map(Number);

    let zeroCount = 0;
    let minusCount = 0;
    let plusCount = 0;
    
    for(let i = 0; i < n; i += 1){
        let currentStatus = arr[i];
        
        if(currentStatus < 0){
            minusCount += 1;
        }else if(currentStatus > 0){
            plusCount += 1;
        }else {
            zeroCount += 1;
        }
    }
    console.log(plusCount / n);
    console.log(minusCount / n);
    console.log(zeroCount / n);
}
main([6 ,-4, 3, -9, 0, 4, 1])