// Funciones

// Simple
function myFunction(){
    console.log("Hola Mundo")
}

myFunction()

// Con parametros

function myFunctionWithParams(name){
    console.log(`Hola, ${name}`)
}

myFunctionWithParams("Juan")
myFunctionWithParams("Andres")

//Funciones anonimas

const myFunction2 = function(name){
    console.log(`Hola, ${name}`)
}

myFunction2("Jaramillo")

// Funciones flecha

const myFunction3 = (name) => {
    console.log(`Hola, ${name}`)
}

myFunction3("Darkja")

// Parametros

function sum(a, b){
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

// Parametros por defecto

function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

defaultSum(5, 10)
defaultSum(5)
defaultSum()

// Retorno de valores

function mult(a , b ){
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern(){
    function intern(){
        console.log("Hola Mundo")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunction(func, param){
    func(param)
}

applyFunction(myFunction3, "Funcion de orden superior")

// forEach

let myArray = [1, 2, 3, 4, 5]

mySet = new Set(["Juan", "Andres", "Jaramillo", 37 , true])

myMap = new Map([
    ["name", "Juan"],
    ["lastname", "Jaramillo"],
    ["age", 23]
])

myArray.forEach((value) => console.log(value))

myArray.forEach(function (value) {
    console.log(value)
})

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))
