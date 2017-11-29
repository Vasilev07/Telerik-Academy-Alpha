function solve(array){
    let counter = 1;
    let maxCounter = 1;
    
    for (let i = 0; i < array.length - 1; i += 1) {
        let currentNumber = array[i];
        let nextNumber = array[i + 1];
        if(currentNumber + 1 === nextNumber){
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

solve([7,3,2,3,4,5,2,2,4,1,2,3,4,5,6,7]);