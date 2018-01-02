class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Human {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}

class Worker extends Human {
    constructor(name, age, weekSalary) {
        super(name, age, weekSalary);
        this.weekSalary = weekSalary;
    }
    moneyPerHour(hoursPerDay) {
        this.hoursPerDay = hoursPerDay;
        const earnedMoney = this.weekSalary;
        const moneyPerHour = earnedMoney / this.hoursPerDay;
        return moneyPerHour;
    }
}
const newHuman = new Worker('John', 23, 200);
console.log(newHuman.moneyPerHour(2));
console.log(newHuman);

