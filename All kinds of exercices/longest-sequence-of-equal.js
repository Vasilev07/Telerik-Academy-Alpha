function solve(array){
    let counter = 1;
    let maxCounter = 1;
    for (let i = 1; i < array.length - 1; i++) {
        let currentNumber = array[i];
        let nextNumber = array[i + 1];
        if(currentNumber === nextNumber){
            counter += 1;
            if(counter > maxCounter){
                maxCounter = counter;
            }
        }else{
            counter = 1;
        }
        currentNumber = nextNumber;
    }
    console.log(maxCounter);
}
solve([10,2,3,4,1,1,1]);
solve([10,2,1,1,2,3,3,2,2,2,1]);
solve([1,1,1,2,2,2,3,3,3,3])