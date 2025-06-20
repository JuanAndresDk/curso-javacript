/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

    for(let i = 0; i < 20; i++){
        console.log(i + 1);
    }

    console.log("///////////////////////////////////////")
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

    let sum = 0
    let i = 1
    while(i <= 100){
        sum += i
        i++
    }
    console.log(`La suma total es ${sum}`)
        console.log("///////////////////////////////////////")

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

    i = 0
    myArray = []
    while(i <= 50){
        if( i % 2 == 0){
            myArray.push(i)
        }
        i++
    }
    console.log(myArray)
    console.log("///////////////////////////////////////")

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

    myArray = ["Juan", "Andres", "Jaramillo"]

    for(let valor of myArray){  
        console.log(valor)
    }
    console.log("///////////////////////////////////////")

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    
let myString = "Andresa"
let myStringLower = myString.toLocaleLowerCase()
let count = 0
i = 0
while(i < myString.length ){
    if(myStringLower[i] == "a" || myStringLower[i] == "e" || myStringLower[i] == "i" || myStringLower[i] == "o" || myStringLower[i] == "u"){
        count++
    }
    i++
}

console.log(`El numero de vocales es ${count}`)

console.log("///////////////////////////////////////")

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

    myArray = [1, 2, 3, 4, 5]
    i = 0
    result = 1
    do{
        result *= myArray[i]
        i++
    }while(i < myArray.length)
    console.log(`El producto de todos los numeros es ${result}`)
    console.log("///////////////////////////////////////")

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    for(let i = 1 ; i <= 12 ; i++){
        console.log(`5 x ${i} = ${5 * i}`)
    }
    console.log("///////////////////////////////////////")

// 8. Usa un bucle para invertir una cadena de texto
 myString = "Andres"
 i = myString.length - 1

    while( i >= 0){
        console.log(myString[i])
        i--
    }
    console.log("///////////////////////////////////////")

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibo = 0
let a = 0
let b = 1
let siguiente = 0
console.log(a)
console.log(b)
 for( let i = 2; i <= 10; i++){
    siguiente = a + b
    console.log(siguiente)
    a = b
    b = siguiente
 }    
console.log("///////////////////////////////////////")

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
    myArray = [1, 2, 3, 10, 14, 16, 29, 30]
    myArray2 = []
    for( let valor of myArray){
        if (valor > 10){
            myArray2.push(valor)
        }
    }
    console.log(myArray2)
    console.log("///////////////////////////////////////")
