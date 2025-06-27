/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
let balon = {
    color: "negro"
}
balon.description = function (){
    console.log(`El balon es de color ${this.color}`)
}

balon.description()
console.log("///////////////////////////////////////");
// 2. Crea un objeto que herede de otro
let partido = Object.create(balon)
partido.equipoA = "BSC"
console.log(partido.equipoA)
console.log("///////////////////////////////////////");
// 3. Define un método de instancia en un objeto
function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.getAge = function(){
    return this.age;
};

let newPerson = new Person("Juan", 23)

console.log(`${newPerson.name} tiene ${newPerson.getAge()} años.`)

console.log("///////////////////////////////////////");
// 4. Haz uso de get y set en un objeto
let dog = {
    internalName: "Mila", 
    raza: "Rottwailer",

    get name() {
        return this.internalName;
    },

    set name(value) {
        this.internalName = value;
    }
};

dog.name = "Yuna";

console.log(dog.name); 

console.log("///////////////////////////////////////");
// 5. Utiliza la operación assign en un objeto
let pcSoftware = { sf1:"Windows", sf2: "Chrome", sf3: "Spotify"}
let pdcHardware = { hd1: "RAM", hd2: "Disk", hd3: "CPU"}
let pcComplete = Object.assign(pcSoftware,pdcHardware)
console.log(pcComplete)
console.log("///////////////////////////////////////");
// 6. Crea una clase abstracta
class Shape {
    constructor(color) {
        if (new.target === Shape) {
            throw new Error("No se puede instanciar la clase abstracta 'Shape'");
        }
        this.color = color;
    }

    // Método abstracto
    area() {
        throw new Error("El método 'area()' debe ser implementado por la subclase");
    }

    // Método abstracto
    draw() {
        throw new Error("El método 'draw()' debe ser implementado por la subclase");
    }
}

console.log("///////////////////////////////////////");
// 7. Utiliza polimorfismo en dos clases diferentes
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    draw() {
        console.log(`Dibuja un rectángulo de color ${this.color}, ancho ${this.width} y alto ${this.height}`);
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    draw() {
        console.log(`Dibuja un círculo de color ${this.color} y radio ${this.radius}`);
    }
}
const rect = new Rectangle("rojo", 5, 10);
rect.draw(); // Dibuja un rectángulo de color rojo, ancho 5 y alto 10
console.log("Área:", rect.area()); // Área: 50

const circle = new Circle("azul", 3);
circle.draw(); // Dibuja un círculo de color azul y radio 3
console.log("Área:", circle.area()); // Área: 28.274...

console.log("///////////////////////////////////////");
// 8. Implementa un Mixin
const canWalk = {
    walk() {
        console.log(`${this.name} está caminando`);
    }
};
const person = {
    name: "Juan"
};
Object.assign(person, canWalk);
person.walk();

console.log("///////////////////////////////////////");
// 9. Crea un Singleton
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.timestamp = Date.now(); // dato arbitrario
        Singleton.instance = this;
    }
}

const inst1 = new Singleton();
const inst2 = new Singleton();

console.log(inst1 === inst2);        // true
console.log(inst1.timestamp);       // mismo timestamp
console.log(inst2.timestamp);       // mismo timestamp

console.log("///////////////////////////////////////");
// 10. Desarrolla un Proxy
const user = {
    name: "Ana",
    age: 25
};

const userProxy = new Proxy(user, {
    get(target, prop) {
        console.log(`Accediendo a propiedad "${prop}"`);
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            throw new Error("La edad debe ser un número");
        }
        target[prop] = value;
        return true;
    }
});

console.log(userProxy.name);      // Accediendo a propiedad "name" → Ana
userProxy.age = 30;               // OK
// userProxy.age = "treinta";    // ❌ Error
