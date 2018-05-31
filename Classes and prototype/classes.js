function Foo() {
    var a = 3;
    console.log(a);
};

const a = new Foo();
const b = new Foo();
b.b = 4;
console.log(a);