// Objetos avanzados

// - Prototipos y Herencia

// Prototipos

let person = {
    name: "Juan",
    age: 23,
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function (){
    console.log(`Tengo ${this.age} años`)
}
console.log("///////////////////////////////////////");
console.log(person)
person.sayAge()

// Herencia

let programmer = Object.create(person)
programmer.language = "Javacript"

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()

// - Métodos estáticos y de instancia

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Juan", 23)
newPerson.greet()

// - Métodos avanzados

// assign

let personCore = {name: "Juan"}
let personDetails = {age: 23, alias: "Darkja"}

let fullPerson = Object.assign(personCore,personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))
