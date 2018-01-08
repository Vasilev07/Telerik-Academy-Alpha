const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '4{a}2{xz}',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
// ---------------------------------------
const encoded = [...gets()];
let decoded = '';
let repeat = 0;
const previousStack = [];
encoded.forEach((char) => {
    if (char === '{') {
        previousStack.push({
            decoded,
            repeat,
        });
        decoded = '';
        repeat = 0;
    } else if (char === '}') {
        const previous = previousStack.pop();
        decoded = previous.decoded + decoded.repeat(previous.repeat);
    } else if (!isNaN(char)) {
        repeat = repeat * 10 + (+char);
    } else {
        decoded += char;
    }
});
print(decoded);

// let str = gets();

// let openBrackets = [];
// let closeBracket;

// let startBlock = function(startIndex, curRepeat) {
//     let curStr = '';
//     let nextRepeat = '';
//     let nextStartIndex;
//     const isOpenBracket = false;

//     for (let i =startIndex; i<str.length; i++) {
//         if (isFinite(str[i])) {
//             nextRepeat += str[i];
//         } else if (str[i] === '{') {
//             openBrackets.push(i);
//             curStr += startBlock(i+1, Number(nextRepeat));
//             // console.log(curStr);
//             nextRepeat = '';
//             i = closeBracket;
//             continue;
//         } else if (str[i] === '}') {
//             closeBracket = i;
//             // console.log(curStr.repeat( Number( curRepeat ) ));
//             return curStr.repeat( Number( curRepeat ) );
//         } else {
//             curStr+=str[i];
//                // '4{a}2{xz}'
//         }
//     }

//     return curStr;
// };

// print(startBlock(0, 1));
// quit(0);