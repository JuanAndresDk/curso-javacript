/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let numbers = [2, 4, 3, 7, 5, 9]

let arrayMap = numbers.map(element => element * 5)
console.log(arrayMap)

let arrayFilter = numbers.filter(element => element > 5)
console.log(arrayFilter)

let arrayReduce = numbers.reduce((result, current) => result * current, 1 )
console.log(arrayReduce)
console.log("///////////////////////////////////////");
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let arrayCube = numbers.map(element => element ** 3)
console.log(arrayCube)

let arrayPares = arrayCube.filter(element => element % 2 === 0)
console.log(arrayPares)
console.log("///////////////////////////////////////");
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let array = [1, 2,[3, 4, [5, [6]]]]
console.log(array)
let arrayFlat = array.flat(2)
console.log(arrayFlat)

let arrayString = ["Juan Andres", "Robert Alejandro"]
let arrayFlatMap = arrayString.flatMap(phrase => phrase.split(" "))
console.log(arrayFlatMap)
console.log("///////////////////////////////////////");
// 4. Ordena un array de números de mayor a menor
let sorted = numbers.sort((a,b) => a-b)
console.log(sorted)
console.log("///////////////////////////////////////");
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let setA = new Set([2, 3, 5, 6])
let setB = new Set([5, 6, 7, 8])

let setUnion = new Set([...setA,...setB])
console.log(setUnion)

let setInterseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(setInterseccion)

let setDiferencia = new Set([...setA].filter(element => !setB.has(element)))
console.log(setDiferencia)
console.log("///////////////////////////////////////");
// 6. Itera los resultados del ejercicio anterior
setUnion.forEach(element => console.log(element))
console.log("///////////////////////////////////////");
// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let users = new Map();
users.set("user1", { name: "Juan", age: 23, email: "juan@mail.com" });
users.set("user2", { name: "Ana", age: 25, email: "ana@mail.com" });
users.set("user3", { name: "Luis", age: 28, email: "luis@mail.com" });


users.forEach((value, key) => {
    console.log(`-${key}:`);
    console.log(`Nombre: ${value.name}`);
    console.log(`Edad: ${value.age}`);
    console.log(`Email: ${value.email}`);
});
console.log("///////////////////////////////////////");
// 8. Dado el mapa anterior, crea un array con los nombres
const nombres = Array.from(users.values()).map(user => user.name);
console.log(nombres);
console.log("///////////////////////////////////////");
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emails = Array.from(users.values()).filter(user => user.age > 18).map(user => user.email)

let setEmails = new Set(emails)
console.log(setEmails)
console.log("///////////////////////////////////////");
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const objFromMap = Object.fromEntries(users);
console.log(objFromMap);

const emailMap = new Map(
    Object.values(objFromMap).map(user => [user.email, user])
);

console.log(emailMap);
