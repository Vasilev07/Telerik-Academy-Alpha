function solve(n){
    function isPrime(number){
        let maxDivider = Math.sqrt(number);
        for (let divider = 2; divider <= maxDivider; divider++) {
            if(number % divider == 0){
                return false;
            }
        }
        return true;
    }

    while(true){
        if(isPrime(n)){
            console.log(n);
            break;
        }
        n--;
    }
}
solve(14);
solve(13);
solve(1048576);