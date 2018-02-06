/* eslint-disable */

var globalNinja = "Yoshi";

function reportActivity() {
    var functionActivity = "jumping";
    for (var i = 1; i < 3; i++) {
        var forMessage = globalNinja + " " + functionActivity;
        console.log(forMessage);
        console.log(i);
    }
    console.log(i);
    console.log(forMessage);
}
reportActivity();

// we can access the function declaration here because of that it's 
// function declaration and it is pinned on the top of the scope
const firstRonin = "Kiyokawa";
check(firstRonin);

function check(ronin) {
   console.log(ronin);
}
/* eslint-enalbe */