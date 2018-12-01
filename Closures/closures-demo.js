/* eslint-disable */
// function foo(a) {
//     console.log(a + b);
//     b = a;
// };

// foo(2);
// Reference Error: b is not defined

// function foo(str, a) {
//     eval(str); //	cheating!
//     console.log(a, b);
// }
// var b = 2;
// foo("var	b	=	3;", 1); //	1,	3
// cheating lexical scope


/* eslint-enable */

// var foo = true;
// if (foo) {
//     let bar = foo * 2;
//     console.log(bar);
// }
// console.log(bar);

// foo(); //	"b"
// var a = true;
// if (a) {
//     function foo() {
//         console.log("a");
//     }
// } else {
//     function foo() {
//         console.log("b");
//     }
// }

for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, 1000);
}
