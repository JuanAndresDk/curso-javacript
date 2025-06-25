/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

const retornA = function (name) {
  console.log(`El nombre es ${name}`);
};

function retornB() {
  return retornA;
}

const retorno = retornB();
retorno("Juan");
console.log("///////////////////////////////////////");
// 2. Implementa una función currificada que multiplique 3 números
function multi(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const multiplicacion = multi(2)(3)(4);
console.log(multiplicacion);
console.log("///////////////////////////////////////");
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia(num, exp) {
  if (exp == 0) {
    return 1;
  }
  return num * potencia(num, exp - 1);
}

console.log(potencia(7, 1));
console.log("///////////////////////////////////////");
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(value) {
    let counter = value;
    let myObject = {
        increment(){
            counter++
        },
        decrement(){
            counter--
        },
        getValue(){
            return counter
        }
    }
    return myObject
}

const counter = createCounter(3);

counter.increment()
counter.increment()
counter.decrement()
console.log(counter.getValue())
console.log("///////////////////////////////////////");
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result * multiplier
}

console.log(`El resultado es ${sumManyTimes(2, 1, 2, 3)}`)
console.log("///////////////////////////////////////");
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumData(...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result

}

function processData(data, callback){
    const result = sumData(...data)
    callback(result)
}

function resultData(result){
    console.log(`El resultado del callback es ${result}`)
}

processData([1, 2, 3], resultData)

console.log("///////////////////////////////////////");
// 7. Desarrolla una función parcial

function partialFunct(a){
    return function(b, c){
        return a + b + c
    }
}
const parcial = partialFunct(2)
console.log(parcial(3, 4))
console.log("///////////////////////////////////////");
// 8. Implementa un ejemplo que haga uso de Spread
let numbers = [ 2, 3, 5]

function sumNumbers(a, b, c){
    return a + b + c
}

console.log(sumNumbers(...numbers))

console.log("///////////////////////////////////////");
// 9. Implementa un retorno implícito
const resta = (a, b) => a - b

console.log(resta(5, 2))
console.log("///////////////////////////////////////");
// 10. Haz uso del this léxico

let dog = {
    name: "Mila",
    hablar() {
        const ladrar = () => {
            // `this` se hereda léxicamente desde `hablar`
            console.log(`${this.name} está ladrando`);
        };
        ladrar();
    }
};

dog.hablar(); // Mila está ladrando

