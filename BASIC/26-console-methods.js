// Console

// log

console.log("Hello, Javascript")

// error

console.error("Este es un mensaje de error")
console.error("Error al conecta a la base de datos: ", new Error("Conexion fallida"))

// warn

console.warn("Es es un mensaje de advertencia")

// info

console.info("Este es un mensaje informativo")

// table

let data = [
    ["Juan", 23],
    ["Alejo", 18],
]
console.table(data)

data = [
    {name: "Juan", age: 23},
    {name: "Alejo", age: 18},
]
console.table(data)

// group

console.group("Usuario: ")
console.log("Nombre: Juan")
console.log("Edad: 23")
console.groupEnd()

// time

console.time("Tiempo de ejecución 1")
for(let i = 0; i < 10000; i++){

}

console.time("Tiempo de ejecución 2")
for(let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución 1")
for(let i = 0; i < 10000; i++){

}
console.timeEnd("Tiempo de ejecución 2")

// assert

let age = 10

console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count

console.count("Click")

console.count("Click")
console.count("Click")

console.countReset("Click")

console.count("Click")

// trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecuacion")
}

funcA()
    
// clear

//console.clear()