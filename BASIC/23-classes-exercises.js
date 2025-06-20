/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Animals{

    constructor(name, color){
        this.name = name
        this.color = color
    }

    // 2. Añade un método a la clase que utilice las propiedades
    describir(){
        return `Soy un animal llamado ${this.name} y mi color es ${this.color}`
    }

    // 4. Añade un método estático a la primera clase
    static nuevoAnimal(name, color){
        return new Animals(name, color)
    }
}




// 3. Muestra los valores de las propiedades e invoca a la función

let dog = new Animals("Mila", "negro");
console.log(dog.name)
console.log(dog.color)
console.log(dog.describir())
console.log("///////////////////////////////////////")


// 5. Haz uso del método estático

let newAnimal = Animals.nuevoAnimal("Yuna", "Suco")
console.log(newAnimal.name)
console.log(newAnimal.color)
console.log(newAnimal.describir())
console.log("///////////////////////////////////////")
// 6. Crea una clase que haga uso de herencia

class Dog extends Animals{

    constructor(name, color, raza){
        super(name, color)
        this.raza = raza
    }
    // 10. Sobrescribe un método de una clase que utilice herencia 
    describir(){
        return `Soy un perro llamado ${this.name} de raza ${this.raza} y mi color es ${this.color}`
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Cats extends Animals{

    #raza
    constructor(name, color, raza){
        super(name, color)
        this.#raza = raza
    }

    // 8. Modifica la clase con getters y setters para que use propiedades privadas

    get raza(){
        return this.#raza
    }

    set raza(raza){
        this.#raza = raza
    }

}

// 9. Utiliza los get y set y muestra sus valores

let gato = new Cats("Luna", "Blanco", "Siamés")
console.log(gato.name)
console.log(gato.color)
console.log(gato.raza)
