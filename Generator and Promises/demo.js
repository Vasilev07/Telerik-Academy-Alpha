/* eslint-disable */
function* WeaponGenerator() {
    yield "Katana";
    yield "Wakizashi";
    yield "Kusarigama";
}
const weaponGenerator = WeaponGenerator();
const result1 = weaponGenerator.next();
const result2 = weaponGenerator.next();
const result3 = weaponGenerator.next();
console.log(weaponGenerator.next());
for (let weapon of WeaponGenerator()) {
    if (weapon !== undefined) {
        console.log(weapon);
    }
}
console.log('-'.repeat(20));
//iterating through wepongenerator with while loop
let weaponIterator = WeaponGenerator();
let item;
while (!(item = weaponIterator.next()).done) {
    console.log(item.value);
}
console.log('-'.repeat(20));

// yeal another generator
function* WarriorGenerator() {
    yield "Sun Tzu";
    yield* NinjaGenerator();
    yield "Genghis Khan";
}

function* NinjaGenerator() {
    yield "Hattori";
    yield "Yoshi";
}
for (let warrior of WarriorGenerator()) {
    if (warrior !== null) {
        console.log(warrior);
    }
}
console.log('-'.repeat(20));

//id generate
function* IdGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}
const idIterator = IdGenerator();
const ninja1 = {
    id: idIterator.next().value
};
const ninja2 = {
    id: idIterator.next().value
};
const ninja3 = {
    id: idIterator.next().value
};
console.log(ninja1.id);
console.log(ninja2.id);
console.log(ninja3.id);

console.log('-'.repeat(20));

function* NinjaGenerator2(action) {
    const imposter = yield("Hattori " + action);
    console.log(imposter);
    yield("Yoshi (" + imposter + ") " + action);
}
const ninjaIterator2 = NinjaGenerator2("skulk");
const result12 = ninjaIterator2.next();
console.log(result12.value);
const result22 = ninjaIterator2.next("Hanzo");
console.log(result22.value);
console.log('-'.repeat(20));

function* NinjaGenerator3(action) {
    yield "Hattori " + action;
    return "Yoshi " + action;
}
const ninjaIterator3 = NinjaGenerator3("skulk");
const result13 = ninjaIterator3.next();
const result23 = ninjaIterator3.next();
console.log(result13);
console.log(result23);
console.log('-'.repeat(20));

const ninjaPromise = new Promise((resolve, reject) => {
    resolve("Hattori");
    //reject("An error resolving a promise!");
});
ninjaPromise.then(ninja => {
    console.log(ninja);
}, err => {
    fail("There shouldn't be an error")
});
/* eslint-enable */