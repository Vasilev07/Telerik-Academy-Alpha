function main(matrix) {

    let a = +matrix;
    
    var nextNum = a.length - 1;
    var prime = 0;
    for (var i = 0; i < a.length; i += 1) {
        prime += a[i][nextNum];
        nextNum--;
    }


    var prevNum = a.length - 1;
    var second = 0;

    for (var k = a.length - 1; k >= 0; k--) {
        second += a[k][prevNum];
        prevNum--;
    }

    console.log(Math.abs(prime - second));
}
main([11, 2, 4,
    4, 5, 6,
    10, 8, -12,
])