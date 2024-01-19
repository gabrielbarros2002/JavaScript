class Person {

    _age = 10
    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get age() {
        return this._age
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x
        } else {
            console.log("Idade não aceita!")
        }
    }
}

let p1 = new Person("João", "Silva")
let p2 = new Person("Maria", "Leite")
let p3 = new Person("Pedro", "Duarte")

p1.takeAStep()
p1.takeAStep()
p1.age = 20
console.log(`Passo de ${p1.fullName}: ${p1.steps}`)
console.log(`Passo de ${p2.fullName}: ${p2.steps}`)
console.log(`${p1.fullName} tem ${p1.age} anos`)
