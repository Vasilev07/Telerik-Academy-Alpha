/* eslint-disable */
// get all lis with querySelector
// var printLisFirst = document.querySelectorAll('header #main-nav ul li');
// for (const iterator of printLisFirst) {
//     console.log(iterator);
// }
// get all lis with getElement
// var printLisSecond = document.getElementsByTagName('li');
// for (const iterator of printLisSecond) {
//     console.log(iterator);
// }

// var ul = document.querySelector('ul').childNodes;
// console.log(ul);
var toArray = function (arrayLike) {
    return [].slice.call(arrayLike);
}

var repeat = function (str, count) {
    var result = '';
    for (var i = 0; i < count; i += 1) {
        result += str;
    }
    return result;
}

var dfs = function (node, count) {
    var prefix = repeat('--', count);
    console.log(prefix + node.tagName);
    var children = toArray(node.children);
    for (var i = 0; i < children.length; i += 1) {
        var nextNode = children[i];
        dfs(nextNode, count + 1);
    }
}

dfs(document.documentElement, 0);

/* eslint-enable */