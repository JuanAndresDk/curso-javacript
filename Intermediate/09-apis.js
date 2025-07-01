// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Métodos HTTP:
// - GET (Recibir)
// - POST (Enviar)
// - PUT (Actualizar)
// - DELETE (Eliminar)

// Códigos de respuesta HTTP:
// - 200 OK
// - 201 OK Personalizado
// - 400 Error parte Cliente
// - 404 No encontrado
// - 500 Error parte Servidor

// Consumir una API

// https://jsonplaceholder.typicode.com

// GET

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        // Transforma la respuesta a JSON
        return response.json()
    })
    .then(data => {
        // Procesa los datos
        console.log(data)
    })
    .catch(error => {
        // Captura errores
        console.log("Error: ", error)
    })

// Uso de Async/Await

async function getPosts(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getPosts()

// Solicitud POST

async function createPost(){
    try {

        const newPost = {
            userId: 1,
            title: "Este es el título de mi post",
            body: "Este es el cuerpo de mi post"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

createPost()

// Herramientas para realizar peticiones HTTP
// - https://postman.com
// - https://apidog.com
// - https://thunderclient.com

// Manejo de errores

fetch("https://jsonplaceholder.typicode.com/mouredev")
    .then(response => {
        if (!response.ok) {
            throw Error(`Status HTTP: ${response.status}`)
        }
        return response.json()
    })
    .catch(error => {
        console.log("Error", error)
    })

// Métodos HTTP adicionales
// - PATCH (Actualizar parcialmente)
// - OPTIONS (Consultar Metodos HTTP Permitidos)

async function partialPostUpdate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "Este es el nuevo título de mi post" })
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

partialPostUpdate()

// Autenticación mediante API Key

async function getWeather(city){
    const apiKey = "f2a44ce3562436c6ee7132164e7ecc4d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getWeather("Madrid")

// Otros métodos de Autenticación y Autorización
// - Bearer Tokens
// - JWT

// Versionado de APIs
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Otras APIs

async function getPokemon(pokemon) {

    // https://pokeapi.co
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        })
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu")