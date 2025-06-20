/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

let person = {
    name: "Juan",
    age: 23,
    alias: "Darkja"
}

let person2 = {
    name: "Juan",
    age: 23,
    alias: "Darkja",
    job: {
        name: "Programador",
        exp: 2,
    }
}

let myArray = [1, 2, 3, 4, 5]
// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
    
    let [a, b] = myArray
    console.log(a)
    console.log(b)
    console.log("///////////////////////////////////////")
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
 let [c, d, e = 10] = myArray
 console.log(c)
 console.log(d)
 console.log(e)
 console.log("///////////////////////////////////////")
// 3. Usa desestructuración para extraer dos propiedades de un objeto

let {name, age} = person
console.log(name)
console.log(age)
console.log("///////////////////////////////////////")
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: name2, age: age2} = person
console.log(name2)
console.log(age2)
console.log("///////////////////////////////////////")

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

    let {job: {name: jobName, exp: jobExp}} = person2
    console.log(jobName)
    console.log(jobExp)
    console.log("///////////////////////////////////////")
// 6. Usa propagación para combinar dos arrays en uno nuevo
    let myArray2 = [6, 7, 8, 9, 10]

    let myArray3 = [...myArray, ...myArray2]
    console.log(myArray3)
    console.log("///////////////////////////////////////")
// 7. Usa propagación para crear una copia de un array
    myArray3 = [...myArray2]
    console.log(myArray3)
    console.log("///////////////////////////////////////")
// 8. Usa propagación para combinar dos objetos en uno nuevo
    let obj1 = { nombre: "Mila", edad: 2 };
    let obj2 = { color: "negro", raza: "Labrador" };

    let combinado = { ...obj1, ...obj2 };

    console.log(combinado);
    console.log("///////////////////////////////////////")
// 9. Usa propagación para crear una copia de un objeto
    let obj3 = {...obj1}
    console.log(obj3)
    console.log("///////////////////////////////////////")

// 10. Combina desestructuración y propagación

let perro = { nombre: "Mila", edad: 2, color: "negro", raza: "Rottweiler" };
let datosMedicos = {peso: "30kg", vacunas: "Si", desparasitacion: "No"}
// Desestructuración: extraemos propiedades directamente
let { nombre, edad, raza } = perro;

console.log(nombre); 
console.log(edad); 
console.log(raza); 

let peroActualizado = { nombre, edad, raza, ...datosMedicos}

console.log(peroActualizado)

