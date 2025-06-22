// Exportacion de modulos

export function add(a,b){
    return a+b;
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416;

export let name = "Juan"

// Clases

export class Circle{

    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter(){
        return 2 * Math.PI * this.radius
    }
}

// Exportacion por defecto

export default  function subtract(a, b){
    return a - b
}

// export default class MyClass {
//     func() {
//         console.log("Mi clase")
//     }
// }