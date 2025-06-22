/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function myFunctionError(){
    console.error("Este es un mensaje de error")
}
myFunctionError()
console.log("///////////////////////////////////////");
// 2. Crea una función que utilice warn correctamente

function myFunctionWarn(){
    console.warn("Es es un mensaje de advertencia")
}
myFunctionWarn()
console.log("///////////////////////////////////////");
// 3. Crea una función que utilice info correctamente

function myFunctionInfo(){
    console.info("Este es un mensaje informativo")
}
myFunctionInfo()
console.log("///////////////////////////////////////");
// 4. Utiliza table
data = [
    {name: "Juan", age: 23},
    {name: "Alejo", age: 18},
]
console.table(data)
console.log("///////////////////////////////////////");
// 5. Utiliza group
console.group("Perros: ")
console.log("Nombre: Mila")
console.log("Edad: 1.3 ")
console.groupEnd()
console.log("///////////////////////////////////////");
// 6. Utiliza time
console.time("Tiempo de ejecución 1")
for(let i = 0; i < 1000000; i++){

}
console.timeEnd("Tiempo de ejecución 1")
console.log("///////////////////////////////////////");
// 7. Valida con assert si un número es positivo
let numb = -1
console.assert(numb > 0, "El número no es positivo")
console.log("///////////////////////////////////////");
// 8. Utiliza count
console.count("Ejecucion")
console.count("Ejecucion")
console.count("Ejecucion")
console.countReset("Ejecucion")
console.log("///////////////////////////////////////");
// 9. Utiliza trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecuacion")
}

funcA()
console.log("///////////////////////////////////////");
// 10. Utiliza clear

//console.clear()
