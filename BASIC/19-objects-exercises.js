/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
    let dog = {
        name: "Mila",
        color: "negro",
        age: 1
    }
    console.log("///////////////////////////////////////")
// 2. Accede y muestra su valor
    console.log(dog);

    console.log("///////////////////////////////////////")
// 3. Agrega una nueva propiedad
    dog.weight = "30 kg"
    console.log(dog);

    console.log("///////////////////////////////////////")
// 4. Elimina una de las 3 primeras propiedades
    delete dog.age
    console.log(dog);

    console.log("///////////////////////////////////////")
// 5. Agrega una función e invócala
    dog.ladrar = function() {
    console.log("¡Guau guau!");
    };
    
    console.log(dog);
    dog.ladrar();

    console.log("///////////////////////////////////////")
// 6. Itera las propiedades del objeto
    for(let key in dog){
        console.log(key + ": " + dog[key]);
    }
// 7. Crea un objeto anidado
    let dog2 = {
        name: "Yuna",
        color: "amarillo",
        age: 0.6,
        owner: {
            name:"Alejandro",
            age: 18
        }
    }

    console.log(dog2);

    console.log("///////////////////////////////////////")
// 8. Accede y muestra el valor de las propiedades anidadas
    console.log(dog2.owner.name);
    console.log(dog2.owner.age);
    console.log("///////////////////////////////////////")
// 9. Comprueba si los dos objetos creados son iguales
    console.log(dog == dog2);

    console.log("///////////////////////////////////////")
// 10. Comprueba si dos propiedades diferentes son iguales

    console.log(dog.name == dog2.age)