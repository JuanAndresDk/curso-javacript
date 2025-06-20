/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades.
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // 2. Añade un método a la clase que utilice las propiedades.
    describe() {
        return `This animal is a ${this.species} named ${this.name}.`;
    }

    // 4. Añade un método estático a la primera clase.
    static create(name, species) {
        return new Animal(name, species);
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función.
let myAnimal = new Animal("Buddy", "Dog");
console.log(myAnimal.name);    // Outputs: Buddy
console.log(myAnimal.species); // Outputs: Dog
console.log(myAnimal.describe()); // Outputs: This animal is a Dog named Buddy.

// 5. Haz uso del método estático.
let anotherAnimal = Animal.create("Whiskers", "Cat");
console.log(anotherAnimal.describe()); // Outputs: This animal is a Cat named Whiskers.

// 6. Crea una clase que haga uso de herencia.
class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name, species);
        this.furColor = furColor;
    }

    describe() {
        return `${super.describe()} It has ${this.furColor} fur.`; // 10. Sobrescribe un método de una clase que utilice herencia.
    }
}

// 7. Crea una clase que haga uso de getters y setters.
// 8. Modifica la clase con getters y setters para que use propiedades privadas.
class Bird extends Animal {
    #wingSpan;
    constructor(name, species, wingSpan) {
        super(name, species);
        this.#wingSpan = wingSpan;
    }

    // 9. Utiliza los get y set y muestra sus valores.
    get wingSpan() {
        return this.#wingSpan;
    }
}