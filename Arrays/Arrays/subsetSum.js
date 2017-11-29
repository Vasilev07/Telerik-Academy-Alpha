function solve(array, s){
    let hasSum = false;
   for (let i = 0; i < array.length; i += 1) {
       let realSum = array[i];
      for (let k = 1; k < array.length; k += 1) {
        realSum += k;
        if(realSum === s){
            hasSum = true;
            break;
        }
      }
   }
   return hasSum;
}
console.log(solve([2, 1, 2, 4, 3, 5, 2, 6], 27));

