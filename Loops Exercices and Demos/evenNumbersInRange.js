function solve(range){
    let start = +range[0];
    let end = +range[1];
    if(start % 2 === 1){
        start += 1;
    }

    for (let i = start; i <= end; i += 2) {
        console.log(i);    
    }

   
}
solve([1,12]);