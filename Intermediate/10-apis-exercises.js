// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/postss")
    .then(response => {
        if(!response.ok){
            //throw new Error(`Status HTTP: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function createPosts(){
    try {
        const newPost = {
            userId: 5,
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
        console.log("Error: ", error)
    }
}

//createPosts()
// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function updatePost() {
    try {
        const newPost = {
            userId: 5,
            title: "Este es el título de mi post",
            body: "Este es el cuerpo de mi post"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/50", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//updatePost()
// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function partialUpdate(){
    try {
        const response = await await fetch("https://jsonplaceholder.typicode.com/posts/20", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "Este es el nuevo título de mi post" })
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

//partialUpdate()
// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function deletePost(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/30", {
            method: "DELETE",
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

deletePost()
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
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

getWeather("Barcelona")
async function getPokemon(pokemon) {
    const baseUrl = "https://pokeapi.co/api/v2";

    try {
        // Paso 1: Datos del Pokémon
        const response = await fetch(`${baseUrl}/pokemon/${pokemon}`);
        const data = await response.json();

        console.log(`\n📛 Pokémon: ${data.name}`);
        console.log("🧠 Habilidades:");
        data.abilities.forEach(ability => {
            console.log(" -", ability.ability.name);
        });

        // Paso 2: Obtener datos de especie
        const speciesUrl = data.species.url;
        const speciesRes = await fetch(speciesUrl);
        const speciesData = await speciesRes.json();

        console.log(`\n🔬 Color de especie: ${speciesData.color.name}`);
        console.log("📖 Texto de la Pokédex:");
        const entry = speciesData.flavor_text_entries.find(e => e.language.name === "es");
        if (entry) console.log(`"${entry.flavor_text.replace(/\n/g, ' ')}"`);

        // Paso 3: Obtener cadena evolutiva
        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        console.log("\n🔗 Cadena evolutiva:");
        printEvolutionChain(evoData.chain);

    } catch (error) {
        console.error("❌ Error:", error);
    }
}

// Función recursiva para imprimir la cadena evolutiva
function printEvolutionChain(chain) {
    console.log(" -", chain.species.name);
    if (chain.evolves_to.length > 0) {
        printEvolutionChain(chain.evolves_to[0]);
    }
}

// Llamada con ejemplo
getPokemon("pikachu");

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API