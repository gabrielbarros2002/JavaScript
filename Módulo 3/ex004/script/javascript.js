class Person {

    static hands = 2
    age = 0

    constructor(name) {
        this.name = name
    }
}

class Student extends Person {

    constructor(name, id) {
        super(name)
        this.id = id
    }
}

let p1 = new Student("Bonieky", 1)
p1.age = 20

let p2 = new Student("Pedro", 2)

console.log(`${p1.name} tem ${p1.age} anos, matrícula #${p1.id} e tem ${Person.hands} mãos`)
console.log(`${p2.name} tem ${p2.age} anos matrícula #${p1.id} e tem ${Person.hands} mãos`)