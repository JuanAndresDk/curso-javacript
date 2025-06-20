// Objetos

// Sintaxis

let person = {
    name: "Juan",
    age: 23,
    alias: "Darkja"
}

// Acceso a propiedades

//Notacion punto
console.log(person.name)

// Notacion de corchetes
console.log(person["alias"])

// Modificacion de propiedades

person.name = "Andres"
console.log(person.name)

console.log(typeof person.age)
person.age = "23"
console.log(person.age)
console.log(typeof person.age)

// Eliminacion de propiedades

delete person.alias
console.log(person)

// Nueva propiedad

person.email = "juan.jarab26@gmail.com"
person["alias"] = "Darkja"
console.log(person)

// Metodos (funciones)

let person2 = {
    name: "Juan",
    age: 23,
    alias: "Darkja",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

// Anidacion de objetos

let person3 = {
    name: "Juan",
    age: 23,
    alias: "Darkja",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function(){
        console.log(`La persona de ${this.exp} años de experiencia trabaja de ${this.name}`)
        },
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos


let person4 = {
    name: "Andres",
    age: 23,
    email : "juan.jarab26@gmail.com",
    alias: "Darkja"
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for(let key in person){
    console.log(key + ": " + person[key])
}

// Funciones como objetos

function Person(name, age){ // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Juan", 23)
console.log(person5)

console.log(typeof person5)
console.log(typeof person4)

