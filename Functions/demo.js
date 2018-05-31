function foo(something) {
    console.log(this.a);
    return this.a;
}
var obj = 2
;
var bar = foo.bind(obj);
var b = bar(3); //	2	3