function solve(array){
    let min = Math.min(...array);
    let max = Math.max(...array);

    let holder = [];
    
    let minIndex = array.indexOf(min);
    let minIndexDelete = array.splice(minIndex,1);
    
    let maxSum = array.reduce((x,y) => x + y);
    //console.log(maxSum);
    holder.push(maxSum);
    array.push(minIndexDelete[0]);

    let maxIndex = array.indexOf(max);
    let maxIndexDelete = array.splice(maxIndex, 1);

    let minSum = array.reduce((x,y) => x + y);
    //console.log(minSum);
    holder.push(minSum);

    console.log(holder.reverse().join(' '));
}
solve([1,2,3,4,5,]);