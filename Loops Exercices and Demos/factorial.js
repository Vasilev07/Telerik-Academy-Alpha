function solve(number){
    
     let factorial = 1;
     let n = number;
     while(n > 0){
         factorial *= n;
         n -= 1;
     }
     console.log(`${factorial} solving factorial first way`);

    let fact = 1;
    let index = 1;
    let n2 = number;
    while (index <= n2) {
        fact *= index;
        index += 1;
    }

    console.log(`${fact} solving factorial second way`);
}
solve(3);
solve(5);



function factorial(n) {
    if(n === 0) {
      return 1;
    }
  
    return factorial(n-1) * n;
  }

  console.log(factorial(3) + '  solving factorial third way'); 
  console.log(factorial(5) + '  solving factorial third way'); 