// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion 

myMap = new Map([
    ["name", "Juan"],
    ["lastname", "Jaramillo"],
    ["age", 23]
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set("alias", "darkja")
myMap.set("name", "Andres")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

//has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("alias")

console.log(myMap)

// keys

console.log(myMap.keys())

// values

console.log(myMap.values())

// entries

console.log(myMap.entries())

//size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)

