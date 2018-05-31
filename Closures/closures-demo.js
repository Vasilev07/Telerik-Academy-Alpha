/* eslint-disable */
function foo(a) {
    console.log(a + b);
    b = a;
};

foo(2);
// Reference Error: b is not defined

function foo(str, a) {
    eval(str); //	cheating!
    console.log(a, b);
}
var b = 2;
foo("var	b	=	3;", 1); //	1,	3
// cheating lexical scope


/* eslint-enable */
