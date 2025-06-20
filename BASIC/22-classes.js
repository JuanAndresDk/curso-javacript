// Clases

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person("Juan", 23, "Darkja")
let person2 = new Person( "Alejandro", 18, "Ale")
console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto
class defaultPerson{
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new defaultPerson("Juan", 23)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Darkja"
console.log(person3.alias)

// Funciones en clases

class PersonWithMethod{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("La persona camina.")
    }
}

let person4 = new PersonWithMethod("Juan", 23, "Darkja")
person4.walk()

// Propiedades privadas

class privatePerson{
    #bankAccount
    constructor(name, age, alias, bankAccount){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bankAccount = bankAccount
    }

    pay(){
        return this.#bankAccount
    }
}

let person5 = new privatePerson("Juan", 23, "Darkja", "AHO1000")

// No podemos acceder
//console.log(person5.bankAccount)
// person5.bankAccount = "IBAN123456789" // bankAccount no es #bank

// Getters y Setters

class GetSetPerson{
    #name
    #age
    #alias
    #bankAccount

    constructor(name, age, alias, bankAccount){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bankAccount = bankAccount
    }

    get name(){
        return this.#name
    }

    set bankAccount(newbankAccount){
        this.#bankAccount = newbankAccount
    }

}

let person6 = new GetSetPerson("Juan", 23, "Darkja", "AHO1000")

console.log(person6.name)

person6.bankAccount = "IBAN123456789"

console.log(person6.bankAccount)


/*
Clase - Herencia de clases
*/

// Herencia

class Animal{

    constructor(name){
        this.name = name
    }

    sound(){
        console.log("El animal hace un sonido.")
    }
}

class Dog extends Animal{

    sound(){
        console.log("El perro ladra.")
    }


    run(){
        console.log("El perro corre.")
    }

}

class Fish extends Animal {

    constructor(name, size){
        super(name)
        this.size = size
    }
    
    swim() {
        console.log("El pez nada")
    }

}
let myDog = new Dog("MILA")
myDog.sound()
myDog.run()
console.log(myDog.name)


let myFish = new Fish("Nemo", 15)
myFish.sound()
myFish.swim()
console.log(myFish.name)

// Métodos estáticos

class MathOperations{
    
    static sum(a, b){
        return a + b
    }
}


console.log(MathOperations.sum(5, 10))