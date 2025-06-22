/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/
 let myObject;

// 1. Captura una excepción utilizando try-catch
try {
    console.log(myObject.email);
    console.log("Finaliza la ejecución sin errores");
} catch (error) {
    console.log("Se ha producido un error: ", error.message);
}
console.log("///////////////////////////////////////");

// 2. Captura una excepción utilizando try-catch y finally
console.log("--- Ejercicio 2 ---");
try {
    console.log(myObject.name);
    console.log("Finaliza la ejecución sin errores");
} catch (error) {
    console.log("Se ha producido un error: ", error.message);
} finally {
    console.log("Este código se ejecuta siempre");
}
console.log("///////////////////////////////////////");

// 3. Lanza una excepción genérica
try {
    throw new Error("Este es un error genérico provocado intencionadamente.");
} catch (error) {
    console.log("Error capturado:", error.message);
}
console.log("///////////////////////////////////////");
    
// 4. Crea una excepción personalizada
console.log("--- Ejercicio 4 ---");
class ValidationError extends Error {
    constructor(message, value) {
        super(message);
        this.name = "ValidationError";
        this.value = value;
    }

    logInvalidValue() {
        console.log(`El valor inválido fue: ${this.value}`);
    }
}
console.log("Clase de error personalizada 'ValidationError' creada.");
console.log("///////////////////////////////////////");

// 5. Lanza una excepción personalizada
// 6. Lanza varias excepciones según una lógica definida
function processNumber(num) {
    if (typeof num !== "number") {
        throw new TypeError("El argumento debe ser un número.");
    }
    if (num < 0) {
        throw new ValidationError("El número no puede ser negativo.", num);
    }
    return `El número ${num} ha sido procesado correctamente.`;
}

// Lanzando TypeError
try {
    console.log(processNumber("5"));
} catch(error) {
    console.log("Error capturado:", error.message);
}

// Lanzando ValidationError (excepción personalizada)
try {
    console.log(processNumber(-5));
} catch(error) {
    if (error instanceof ValidationError) {
        console.log("Error de validación personalizado capturado:", error.message);
        error.logInvalidValue();
    } else {
        console.log("Otro tipo de error:", error.message);
    }
}
console.log("///////////////////////////////////////");

// 7. Captura varias excepciones en un mismo try-catch
try {
    // Prueba con un string para lanzar TypeError
    // console.log(processNumber("diez"));
    
    // Prueba con un número negativo para lanzar ValidationError
    console.log(processNumber(-10));
    
    // Prueba con un número válido
    // console.log(processNumber(10));

} catch(error) {
    console.log(`Se ha producido un error de tipo: ${error.name}`);
    if (error instanceof TypeError) {
        console.log("Mensaje:", "El valor introducido no es un número.");
    } else if (error instanceof ValidationError) {
        console.log("Mensaje:", error.message);
        error.logInvalidValue();
    } else {
        console.log("Mensaje de error genérico:", error.message);
    }
}
console.log("///////////////////////////////////////");

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valuesToParse = ["10.5", "20", "abc", true, "3.14", null, "  -5  "];

valuesToParse.forEach(value => {
    try {
        const number = parseFloat(value);
        if (isNaN(number)) {
            throw new Error(`'${value}' no se puede convertir a un número flotante.`);
        }
        console.log(`'${value}' se convirtió a ${number}`);
    } catch (error) {
        console.error(`Error al procesar el valor ${value}: ${error.message}`);
    }
});
console.log("///////////////////////////////////////");

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropertyMissingError extends Error {
    constructor(propertyName) {
        super(`La propiedad requerida '${propertyName}' no se encuentra en el objeto.`);
        this.name = "PropertyMissingError";
        this.propertyName = propertyName;
    }
}

function verifyProperty(obj, propertyName) {
    if (obj === null || typeof obj !== 'object' || !(propertyName in obj)) {
        throw new PropertyMissingError(propertyName);
    }
    console.log(`La propiedad '${propertyName}' existe con el valor: ${obj[propertyName]}`);
}

const user = { name: "Juan", age: 30 };

try {
    verifyProperty(user, "name"); // Funciona
    verifyProperty(user, "email"); // Lanza error
} catch (error) {
    if (error instanceof PropertyMissingError) {
        console.error(`Error de verificación: ${error.message}`);
    } else {
        console.error(`Error inesperado: ${error.message}`);
    }
}
console.log("///////////////////////////////////////");

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function flakyOperation() {
    const random = Math.random();
    if (random > 0.2) { // 80% de probabilidad de fallo
        throw new Error("Error de conexión simulado.");
    }
    return "Operación exitosa!";
}

function retryOperation(operation, maxRetries) {
    let lastError;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Intento #${attempt}...`);
            return operation(); // Si tiene éxito, sale de la función
        } catch (error) {
            lastError = error;
            console.log(`Intento #${attempt} fallido: ${error.message}`);
        }
    }
    throw new Error(`La operación falló después de ${maxRetries} intentos. Último error: ${lastError.message}`);
}

try {
    const result = retryOperation(flakyOperation, 10); // Probamos con 5 reintentos
    console.log(result);
} catch (error) {
    console.error(error.message);
}