// array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(1, 2, 3, 4, 5)

console.log(myArray)
console.log(myArray2)

myArray = ["Juan", "Andres", "Jaramillo", 37 , true]
myArray2 = new Array("Juan", "Andres", "Jaramillo", 37 , true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)

myArray2[0] = "Juan"
//myArray2[1] = "Andres"
myArray2[2] = "Jaramillo"

console.log(myArray2)

myArray = []

myArray[0] = "Juan"
myArray[1] = "Andres"
myArray[2] = "Jaramillo"

console.log(myArray)

// Metodos comunes

myArray = []

//push y pop

myArray.push("Juan")
myArray.push("Andres")
myArray.push("Jaramillo")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo y lo devulve

myArray.pop()


console.log(myArray)

// shift y unshift

myArray.shift() // Elimina el primer elemento y lo devuelve
console.log(myArray)

myArray.unshift("Juan", "Jaramillo") // Agrega un elemento al principio
console.log(myArray)

// length

console.log(myArray.length)

// clear

//myArray = []
//myArray.length = 0 // alternativa
console.log(myArray)

// slice
myArray.push(23)
let myNewArray = myArray.slice(1,2) // 

console.log(myArray)
console.log(myNewArray)

// splace

myArray.splice(1,2) // Elimina los elementos

console.log(myArray)

myArray = ["Juan", "Andres", "Jaramillo", 37 , true]

myArray.splice(1,2,"NUEVO ELEMENO") // Elimina los elementos y añade otro elemento

console.log(myArray)







