// Ejercicios 6.1

function division(a, b) {
    if (b === 0) {
        throw new RangeError("No se puede dividir en cero");
    }
    return a / b;
}

// Testeo
console.log("Division Valida: 10 / 2 =", division(10, 2)); // Salida 5
console.log("Division Valida: -10 / 2 =", division(-10, 2)); // Salida -5

try {
    console.log("Division por cero: 10 / 0 =", division(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Division por cero: -10 / 0 =", division(-10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

// Programa adicional: Dividir 1000 entre elementos de un array
let numeros = [10, 40, 0, 20, 50]; // Array con algunos ceros para probar

for (let i = 0; i < numeros.length; i++) {
    try {
        let resultado = division(1000, numeros[i]);
        console.log(`1000 / ${numeros[i]} = ${resultado}`);
    } catch (error) {
        console.log(`Error al dividir 1000 / ${numeros[i]}: ${error.message}`);
    }
}

// Ejercicios 6.2

function outer() {
    let name = "outer";
    let str = inner();
    return str;
}
 
function inner() {
    let name = "inner";
    return "Hello !";
}
 
console.log("before outer() call");
console.log(outer());
console.log("after outer() call");
