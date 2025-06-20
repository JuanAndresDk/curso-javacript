// 1. Concatena dos cadenas de texto
    let cadena = "Hola" + " Juan"
// 2. Muestra la longitud de una cadena de texto
    console.log(cadena.length)
// 3. Muestra el primer y último carácter de un string
    console.log("Primer caracter " +cadena[0] + " Ultimo caracter "+ cadena[cadena.length -1])
// 4. Convierte a mayúsculas y minúsculas un string
    console.log("Mayusculas: " +cadena.toUpperCase()+ " ; Minuscula: "+cadena.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
    let cadenaVarias = `Hola
        Juan 
        !`
// 6. Interpola el valor de una variable en un string
    console.log(`Mensage Interpolado: ${cadena}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
    console.log(cadena.replace(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
    console.log(cadena.includes("uan"))
// 9. Comprueba si dos strings son iguales
    "Hola" == 'Hola' ? console.log("IGUALES") : console.log("DESIGUALES")
// 10. Comprueba si dos strings tienen la misma longitud
    cadena.length == cadenaVarias.length ? console.log("MISMA LONGITUD") : console.log("DIFERENTE LONGITUD")