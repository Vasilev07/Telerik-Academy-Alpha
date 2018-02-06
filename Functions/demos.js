const printSum = (array) => {
    let sum = 0;
    for (const numbers of array) {
        sum += numbers;
    }
    return sum;
};
// console.log(printSum([1, 2, 3]));

const createTriangleOfNumbers = (n) => {
    let line = '';
    for (let i = 1; i < n + 1; i += 1) {
        line += i;
    }
    // console.log(line.trim());
};
// console.log(createTriangleOfNumbers(5));

const printTriangle = (n) => {
    for (let i = 0; i < n + 1; i += 1) {
        createTriangleOfNumbers(i);
    }
    for (let i = n - 1; i >= 0; i -= 1) {
        createTriangleOfNumbers(i);
    }
};
printTriangle(5);

const range = (lenght) => {
    const arr = [];
    for (let i = 0; i < lenght; i++) {
        arr.push(getRandom(i, lenght));
    }
    return arr;
};

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// console.log(range(5));
/* eslint-disable */

// some test about callback functions
var text = "Domo arigato!";

function useless(ninjaCallback) {
    return ninjaCallback();
}

function getText() {
    return text;
}

console.log(useless(getText));
console.log(useless(function () {
    return text
}));

var values = [0, 3, 2, 5, 7, 4, 8, 1];

console.log(values.sort(function (value1, value2) {
    return value1 - value2;
}));
// attach method to function
var wieldSword = function () {};
wieldSword.swordType = "katana";
console.log(wieldSword.swordType);

// storing fucntion as collection
var store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
        if (!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};

function ninja() {}

function nija() {}

function malkaNinja() {}

function ninjaSM() {}
store.add(ninja);
store.add(ninja);
store.add(malkaNinja);
store.add(malkaNinja);
store.add(ninjaSM);
console.log(store);


// function constructor 

var sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));
// hidden ninja in ninja func
function ninja() {
    function hiddenNinja() {
        return "ninja here";
    }
    return hiddenNinja();
}

console.log(ninja());

var samurai = (() => "Tomoe")();
var m = (() => {
    "Yoshi"
})();

console.log(samurai);
console.log(m);

// this 
function func() {
    return this;
}
console.log(func());

function strictFunc() {
    "use strict";
    return this;
}
console.log(strictFunc());

// invocation as method of object
var obj = {};
obj.skulk = function () {
    return this
}; //'i am method func of obj'};
console.log(obj.skulk());
// function constructor

function Ninja() {
    this.skulked = function (param) {
        return this;
    };
}
var ninja7 = new Ninja();
var ninja8 = new Ninja();
console.log(ninja8.skulked());


function Pesho() {
    this.standUp = function () {
        return true;
    };
    return 1;
}
let newPesho = new Pesho();
// if we log pesho it will return 1
// if we log pesho.standUp method it will return value
console.log(newPesho);

var puppet = {
    rules: false
};

function Emperor() {
    this.rules = true;
    return puppet;
}
var emperor = new Emperor();
console.log(emperor);
console.log(emperor.rules);

function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}
var tosho = {};
var gosho = {};
juggle.apply(tosho, [1, 2, 3, 4]);
juggle.call(gosho, 5, 6, 7, 8);
console.log(tosho.result);
console.log(gosho.result);

// some callback's 

let weapons = [{
        type: 'shuriken'
    },
    {
        type: 'katana'
    },
    {
        type: 'nunchucks'
    }
];

weapons.forEach((element, index) => {
    console.log(element.type);
});

function forEach(list, callback) {
    for (var n = 0; n < list.length; n++) {
        callback.call(list[n], n);
    }
}

forEach(weapons, function (index) {
    if (this === weapons[index]) {
        console.log(this);
        console.log(weapons[index].type);
    }
});

var ninja12 = {
    whoAmI: function () {
        return this;
    }
};
var ninja22 = {
    whoAmI: ninja12.whoAmI
};

var identify = ninja22.whoAmI;
console.log(ninja12.whoAmI.call(ninja22);
/* eslint-enable */