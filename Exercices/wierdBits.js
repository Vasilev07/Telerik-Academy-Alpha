function solve(args) {
    
       const number = args[0];
    
       function digitsSum(num) {
           const digits = num.toString().split("");
           let sum = 0;
           for (let i = 0; i < digits.length; i++)
               if (!isNaN(digits[i]))
                   sum += parseInt(digits[i]);
           return sum;
       }
    
       let sum = digitsSum(number);
    
       while (sum > 9)
           sum = digitsSum(sum);
    
       console.log(sum);
    
   }

//solve([-4321]);
solve([15.11]);
//solve([4321]);
//solve([12312253523]);
//solve([1346789]);