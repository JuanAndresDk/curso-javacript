
myArray = [1, 2, 3, 4]

let person = {
    name: "Juan",
    age: 23,
    alias: "Darkja"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)


// Desestructuracion - extraer valores y asignarlos de manera concisa

// Sitaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray

console.log(myValue10)
console.log(myValue13)

// Sintaxis objects

let {name, age, alias} = person

console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados

let {name2, age2, alias2, email = "email@gmail.com"} = person

console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables

let {age: age3, name: name3, alias: alias3} = person

console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

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

let {name: name4, job: { name: jobName }} = person3

console.log(name4)
console.log(jobName)

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray2, ...myArray3, ...myArray]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "email@gmail.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)

