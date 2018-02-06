/* eslint-disable */
function Ninja() {
    var feints = 0;
    // this is getter
    this.getFeints = function () {
        return this.feints;
    };
    this.feint = function () {
        feints++;
    };
}
var ninja1 = new Ninja();
console.log(ninja1.feint()); 
// feint method does not return anything, here we just increment feints variable
console.log(ninja1.getFeints());
var ninja2 = new Ninja();
console.log(ninja2.getFeints()); 
// we haven incremented anything , that means we created two different functions with two different 
//values of the variable feints
/* eslint-enable */
