// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludo(name, callback){
    setTimeout(() => {
        callback(name)
    }, 2000)
}
saludo("Juan", name => console.log(`Hola, ${name}`));

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){
    setTimeout(() => {
        console.log("Task 1 completado")
        callback()
    }, 1000)
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 completado")
        callback()
    }, 1000)
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 completado")
        callback()
    }, 1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todos los Task completados")
        })
    })
})
// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("Número par");
        } else {
            reject("Número impar");
        }
    });
}

// Prueba
verificarNumero(7)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Primera tarea completada")
            resolve()
        }, 1000)
    })
}

function secondTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Segunda tarea completada")
            resolve()
        }, 2000)
    })
}

function thirdTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tercera tarea completada")
            resolve()
        }, 1500)
    })
}

firstTask()
.then(secondTask)
.then(thirdTask)
.then(() => {
        console.log("Todos las tareas con promesa completados")
    })

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function executeTasks(){
    await firstTask()
    await secondTask()
    await thirdTask()
    console.log("Todas las tareas con promesas completadas");
}

executeTasks()
// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve({ id, nombre: "Usuario " + id })
            } else {
                reject("Usuario no encontrado")
            }
        }, 2000)
    })
}

async function fetchUser(id) {
    try {
        const user = await getUser(id)
        console.log("Usuario encontrado:", user)
    } catch (error) {
        console.log("Error:", error)
    }
}

fetchUser(3)
fetchUser(6)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")



// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function firstAll(){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve("Primera tarea all completada")
        }, 2000)
    })
}

function secondAll(){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve("Segunda tarea all completada")
        }, 1000)
    })
}

function thirdAll(){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve("Tercera tarea all completada")
        })
    }, 1500)
}

Promise.all([firstAll(), secondAll(), thirdAll()])
    .then(datos => {
        const [firstResult, secondResult, thirdResult] = datos;
        console.log(firstResult);
        console.log(secondResult);
        console.log(thirdResult);
        console.log("Todas las tareas all completadas");
    });

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(segundos){
    return new Promise(resolve => { 
        setTimeout(() => resolve("Tiempo finalizado"), segundos)
    })
}

async function espera() {
    const result = await waitSeconds(5000)
    console.log(result)
}

espera()
// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
let balance = 500;

function checkBalance(){
    return new Promise(resolve => {
        setTimeout(() => resolve(`Saldo Disponible: $${balance}`), 1000)
    })
}

function withdrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(balance >= amount){
                balance -= amount;
                resolve(`Operacion exitosa, saldo restante: $${balance}`)
            }else{
                reject("Error: Fondos insuficientes")
            }
        }, 2000)
        
    })
}

async function retiro() {
    const amount = 300
    const saldo = await checkBalance();
    console.log(saldo);
    console.log(`Retirando $${amount}`)
    try {
        const resultado1 = await withdrawMoney(amount);
        console.log(resultado1);
    } catch (error) {
        console.log(error);
    }

    console.log(`Retirando $${amount}...`);
    try {
        const resultado2 = await withdrawMoney(amount);
        console.log(resultado2);
    } catch (error) {
        console.log(error);
    }
}

retiro();

