// 1. Crea una variable para cada operación aritmética
    let suma = 5 + 5
    let resta = 10 - 5
    let multiplicacion = 5 * 5
    let division = 10 / 5
    let modulo = 25 % 5
    let exponencial = 10 ** 5

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    suma += 5
    resta -= 5
    multiplicacion *= 5
    division /= 2
    modulo %= 5
    exponencial **= 2 
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    console.log(10 > 5)
    console.log(10 >= 5)
    console.log( 10 == 10)
    console.log("6" === "6")
    console.log(5 != 6)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(5 != 5)
    console.log(4 > 7)
    console.log(10 >= 30)
    console.log(15 < 15)
    console.log(1 <= 0)
// 5. Utiliza el operador lógico and
    console.log(10 > 5 && 3 >= 3)
// 6. Utiliza el operador lógico or
    console.log(10 < 5 || 3 >= 4)
// 7. Combina ambos operadores lógicos
    console.log(10 > 5 && 3 >= 3 || 15 >= 20)
// 8. Añade alguna negación
    console.log(!(10 > 5 && 3 >= 3 || 15 >= 20))
// 9. Utiliza el operador ternario
    const isFCB = true
    isFCB ? console.log("Fultbol Club Barcelona") : console.log("Barcelona Sporting Club")
// 10. Combina operadores aritméticos, de comparáción y lógicas
    let x = 5
    let y = 10
    console.log((x + y > 10) && (y - x < 10))