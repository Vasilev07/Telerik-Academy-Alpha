function solve(numberToSum){
    
    let number = numberToSum[0] + '';
    let sum = 0;

    while (sumDigits(number) > 9) {
        number = sumDigits(number).toString();
    }
    console.log(sumDigits(number));

    function sumDigits(number){
        sum=0;
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);        
        }
        number = sum;
        sum = 0;
        return number;
    }
}
solve([38]);
solve([1511]);
solve([4321]);
solve([12312253523]);
solve([1346789]);