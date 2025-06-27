// Clases avanzadas

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Juan", 23)
person.greet()

person.sayAge = function (){
    console.log(`Tengo ${this.age} años`)
}

person.sayAge()


// - Abstracción

class Animal{
    constructor(name){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound(){
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Error
// const animal = new Animal("Mou")
// console.log(animal)

// - Polimorfismo

class Cat extends Animal{
    makeSound(){
        console.log("Miau!")
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("Guau!")
    }
}

const cat = new Cat("DarkCat")
console.log(cat)

const dog = new Dog("DarkDog")
console.log(dog)

// - Mixins

const FlyMixin = {
    fly(){
        console.log("Esta volando")
    }
}

class Bird extends Animal{ }

class Dragon extends Animal{ }

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("DarkBird")

console.log(bird.name)
bird.fly()

const dragon = new Dragon("DarkDragon")

console.log(dragon.name)
dragon.fly()

// - Patrón Singleton

class Session {
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Darkja")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("MoureDev")
console.log(session3.name)
console.log(session2 === session3)

// - Symbol

const ID = Symbol("id")

class User{
    constructor(name){
        this.name = name
        this[ID] = Math.random()
    }

    getID(){
        return this[ID]
    }
}

const user = new User("Juan")
console.log(user.name)
console.log(user.getID())

// - instanceof

class Car{ }

const car = new Car()

console.log(car instanceof Car)

// - create

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)

// - Proxy

const proxy = {
    get(target, property){
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value){
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 150
console.log(account.balance)

// Error
// account.balance = -10
