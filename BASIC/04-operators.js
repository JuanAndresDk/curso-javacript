// OPERADORES

// Operadores Aritmeticas
let a = 5
let b = 10
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Exponencial

a++ // Incremento
console.log(a) 

b-- // Decremento
console.log(b) 

// Operadores de Asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de Comparacion

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Es distinto?
console.log(a !== "6")

console.log(0 == false)
console.log(1 == false)
console.log(2 == false)

console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(undefined == null)
console.log(undefined === null)

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores logicos

// and (&&)
console.log(5 > 10 && 15 >20) // F & F = F
console.log(5 < 10 && 15 < 20) // V & V = V
console.log(5 < 10 && 15 >20) // V & F = F

// or (||)
console.log(5 > 10 || 15 > 20) // F & F = F
console.log(5 < 10 || 15 < 20) // V & V = V
console.log(5 < 10 || 15 > 20) // V & F = V

// not (!)
console.log(!(5 > 10 && 15 >20)) // !(F & F = F) = V
console.log(!(5 > 10 || 15 > 20)) // !(F & F = F) = V

// Operadores ternarios

const isRaining = true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")


