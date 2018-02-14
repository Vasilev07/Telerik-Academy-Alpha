/* eslint-disable */
function Ninja() {
    var feints = 0;
    this.getFeints = function () {
        return feints;
    };
    this.feint = function () {
        feints++;
    };
}
var ninja1 = new Ninja();
ninja1.feint();
ninja1.feint();
console.log(ninja1.getFeints());
// feint method does not return anything, here we just increment feints variable
var ninja2 = new Ninja();
// we haven incremented anything , that means we created two different functions with two different 
//values of the variable feints
/* eslint-enable */