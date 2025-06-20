/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b){
    return a + b;
}

console.log(suma(2, 3));
console.log("///////////////////////////////////////")

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let nummayor = 0
function mayor(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > nummayor){
            nummayor = array[i]
        }
    }
    return nummayor
}

console.log(mayor([1, 2, 30, 4, 5, 10]));
console.log("///////////////////////////////////////")
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
    let myString = "Jaramilo"
    let count = 0

    function vocales(param){
        for(let i = 0; i < param.length; i++){
            if( param[i] == "a" || param[i] == "e" || param[i] == "i" || param[i] == "o" || param[i] == "u"){
                count++
            }
        }
        return count
    }

    console.log(`${myString} tiene ${vocales(myString)} vocales`)
    console.log("///////////////////////////////////////")
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

myArray = ["juan", "andres", "jaramillo"]
let myArray2 = []
function mayusculas(array){
    for(let i = 0; i < array.length; i++){
        myArray2.push(array[i].toUpperCase())
    }
    return myArray2
}

console.log(mayusculas(myArray))
console.log("///////////////////////////////////////")
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const esPrimo = (numero) => {
    if(numero <= 1){
        return false
    }
    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false
        }
    }
    return true
}

console.log(esPrimo(3))
console.log("///////////////////////////////////////")

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

myArray = [1, 2, 3, 4, 5]
myArray2 = [3, 4, 5, 6, 7]
myArray3 = []
function comunes(array1, array2){
    for(let i = 0; i < myArray.length; i++){
        for(let j = 0; j < myArray2.length; j++){
            if(myArray[i] == myArray2[j]){
                myArray3.push(myArray[i])
            }
        }
    }
    return myArray3
}

console.log(comunes(myArray, myArray2))
console.log("///////////////////////////////////////")
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
 myArray = [1, 2, 3, 4, 5, 6]
 const sumaPares = (array) => {
    let suma = 0;
    for (let values of array) {
        if (values % 2 === 0) {
            suma += values;
        }
    }
    return suma;
};

 console.log(sumaPares(myArray))
 console.log("///////////////////////////////////////")

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
myArray = [1, 2, 3, 4, 5]
myArray2 = []

function cuadrado(array){
    for(let i = 0; i < array.length; i++){
        myArray2.push(array[i] * array[i])
    }
    return myArray2
}

console.log(cuadrado(myArray))
console.log("///////////////////////////////////////")
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
myString = "Javacript"
let cadenaInvertida = ""
const invertir = (cadena) => {
    for(let i = cadena.length -1; i >= 0; i--){
        cadenaInvertida += cadena[i]
    }
    return cadenaInvertida
}

console.log(invertir(myString))
console.log("///////////////////////////////////////")

// 10. Crea una función que calcule el factorial de un número dado

result = 1
function factorial(numero){
    for(let i = numero ; i >= 1; i--){
        result *= i
    }
    return result
}

console.log(factorial(5))
console.log("///////////////////////////////////////")