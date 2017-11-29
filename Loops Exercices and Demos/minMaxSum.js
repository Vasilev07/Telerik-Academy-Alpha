function solve(args){
    let array = +args;

    let minSum = 0;
    let maxSum = 0;
    let counter = 0;
    while(counter <= 5){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            console.log(sum);
        }
        counter++;
    }
}
    
solve([1,2,3,4,5]);