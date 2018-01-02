class Superhero {
    constructor(name, powers) {
        this.name = name;
        this.powers = [...powers];
    }
    get powersString() {
        return this.powers.join(', ');
    }

    set powersString(powersString) {
        this.powers = powersString.split(', ');
    }

    usePowers() {
        console.log(`I am ${this.name} and i can do ${this.powers}`);
    }
}

const batman = new Superhero('Batman', ['eat', 'sleep', 'Cat woman']);
const superman = new Superhero('Superman', ['Utility belt', 'Intellect']);
console.log(batman.powers);
batman.usePowers();

