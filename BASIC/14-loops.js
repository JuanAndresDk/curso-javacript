// Loops o bucles

//for

for(let i = 0; i < 5; i++){
    console.log(`Hola Mundo ${i}`)
}


const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemnto : ${numbers[i]}`)
}

// while
let i = 0
while(i < 5){
    console.log(`Hola Mundo ${i}`)
    i++
}

// Bucle infitino
//while(true){
//}

// do while

i = 6
do{
    console.log(`Hola Mundo ${i}`)
    i++
}while(i < 5)

// for of
myArray = [1, 2, 3, 4, 5]

mySet = new Set(["Juan", "Andres", "Jaramillo", 37 , true])

myMap = new Map([
    ["name", "Juan"],
    ["lastname", "Jaramillo"],
    ["age", 23]
])

myString = "Hola, Javascript!"


for (let valor of myArray){
    console.log(valor)
}

for (let valor of mySet){
    console.log(valor)
}

for (let valor of myMap){
    console.log(valor)
}

for (let valor of myString){
    console.log(valor)
}

//Buenas practicas

// break y continue

for (let i = 0; i < 10; i++){
    if(i == 5){
        continue
    }else if(i == 7){
        break
    }
    console.log(`Hola Mundo ${i}`)
    
}
