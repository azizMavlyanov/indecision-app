
class Person {
    constructor(name = "Anonymous") {
        this.name = name;
    }

    getGretting() {
        return `Hi. I am ${this.name}!`;
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
}

const me = new Student("Alex Morgan", "Information Science In Education");

console.log(me.hasMajor());