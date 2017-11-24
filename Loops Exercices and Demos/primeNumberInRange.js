function solve(){
    

    function isPrime(number){
        let maxDivider = Math.sqrt(number);
        for (let divider = 2; divider <= maxDivider; divider++) {
            if(number % divider == 0){
                return false;
            }
        }
        return true;
    }
}