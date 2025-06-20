// set

// Declaracion

let mySet = new Set()


console.log(mySet)


// Inicializacion

mySet = new Set(["Juan", "Andres", "Jaramillo", 37 , true])

console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("DARKJA")

console.log(mySet)

mySet.delete(37)

console.log(mySet)

// has

console.log(mySet.has("DARKJA"))
console.log(mySet.has(37))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)

console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)

console.log(mySet)

// No admite duplicados sin cambiar 

mySet.add("DARKJA")

console.log(mySet)










