/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    let myName = "Juan"
    let name = "Juan"
    if (name == "Juan"){
        console.log(myName)
    }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let usuario = "Juan"
    let password = "123456"
    if (usuario == "Juan"  && password == "123456"){
        console.log("Bienvenido")
    }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let num = 0

    if( num > 0 ){
        console.log("Positivo")
    } else if (num < 0){
        console.log("Negativo")
    } else {
        console.log("Cero")
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
    let edad = 19
    if(edad >= 18 ){
        console.log("Puede votar")
    }else {
        console.log("Faltan " + (18 - edad) + " años para votar")
    }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
    let edad02 = 13
    isAdult = edad02 >= 18 ? "adulto" : "menor"
    console.log( "Es " + isAdult)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    let mes = 8;

    if (mes < 1 || mes > 12) {
        console.log("Mes no válido")
    } else if (mes >= 1 && mes <= 3) {
        console.log("Invierno");
    } else if (mes >= 4 && mes <= 6) {
        console.log("Primavera")
    } else if (mes >= 7 && mes <= 9) {
        console.log("Verano")
    } else {
        console.log("Otoño")
    }
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior


    if (mes < 1 || mes > 12) {
        console.log("Mes no válido");
    } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        console.log("Este mes tiene 31 días.");
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        console.log("Este mes tiene 30 días.");
    } else {
        console.log("Febrero tiene 28 días, pero 29 en años bisiestos.");
    }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let idioma = "ingles"

    switch(idioma){
        case "espanol":
            console.log("Hola")
            break;
        case "ingles":
            console.log("Hello")
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6


    
    let mes02 = 2; 
    let estacion;

    switch (mes02) {
        case 1: case 2: case 3:
            estacion = "Invierno";
            break;
        case 4: case 5: case 6:
            estacion = "Primavera";
            break;
        case 7: case 8: case 9:
            estacion = "Verano";
            break;
        case 10: case 11: case 12:
            estacion = "Otoño";
            break;
        default:
            estacion = "Mes no válido";
    }

    console.log("La estación del año es: " + estacion);
// 10. Usa un switch para hacer de nuevo el ejercicio 7

    let dias;

    switch (mes02) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            dias = "Este mes tiene 31 días.";
            break;
        case 4: case 6: case 9: case 11:
            dias = "Este mes tiene 30 días.";
            break;
        case 2:
            dias = "Febrero tiene 28 días, pero 29 en años bisiestos.";
            break;
        default:
            dias = "Mes no válido";
    }

        console.log(dias);
