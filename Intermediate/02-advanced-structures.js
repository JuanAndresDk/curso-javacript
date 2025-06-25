// Estructuras avanzadas

// Arrays avanzados

// - Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach( element => console.log(element))

// map - realizar una operacion a cada elemento y devuelve un nuevo array

let doubles = numbers.map(element => element * 2)

console.log(doubles)

// filter - devuelve unn array de acaudro al filtro aplicado

let evens = numbers.filter(element => element % 2 === 0)

console.log(evens)

// reduce

let sum = numbers.reduce((result, current) => result + current, 0)

console.log(sum)

// - Manipulación

// flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// - Ordenación

// sort - por defecto lo ordena alfabeticamente - en numero 

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)

// reverse

sorted.reverse()
console.log(sorted)

// - Búsqueda

// includes


console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find

let firstEven =  sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)

console.log(firstEvenIndex)

// Sets avanzados

// - Operaciones

// Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]

numbersArray = [...new Set(numbersArray)]

console.log(numbersArray)

// Unión - une los set sin duplicados

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])

const union = new Set([...setA, ...setB])

console.log(union)

// Intersección - nuevo set con elementos en comun

const interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion)

// Diferencia - nuevo set con elementos que no estan en el otro set

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// - Conversión

// Set a Array

console.log([...setA])

// - Iteración

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

// - Iteración

let myMap = new Map([
    ["name", "Juan"],
    ["age", 23]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))


// - Conversión

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)


// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)