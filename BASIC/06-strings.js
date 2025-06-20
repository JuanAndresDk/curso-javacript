// Strings

// Concatenacion
let myName = "Juan"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)


// Longitud
console.log(greeting.length)

// Acceso de caracteres
console.log(greeting[0])
console.log(greeting[10])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Juan"))
console.log(greeting.indexOf("Andres"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Juan"))
console.log(greeting.includes("Andres"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Juan", "Andres"))

// Template literals (plantillas literales)
 let message = `Hola, este es mi 
curso de JavaScript` 

console.log(message)

let email = "juan.jarab26@gmail.com"

// Interpolacion
console.log( `Hola, ${myName}! Tu email es ${email}.`)




