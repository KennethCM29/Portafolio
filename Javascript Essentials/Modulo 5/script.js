// Ejercicios 5.1 - Convertidos a funciones

// Función para verificar si un número está entre 90 y 110
function checkNumber(num) {
    if (num > 90 && num < 110) {
        return "Bingo!";
    } else {
        return "Error";
    }
}

// Llamada a la función
let número = prompt("Introduce un número:");
alert(checkNumber(número));

// Función para ordenar un array de números de mayor a menor
function sortNumbersDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let números = [50, 10, 40, 30, 20];
let sorted = sortNumbersDescending(números);
console.log(sorted); // [50, 40, 30, 20, 10] (orden descendente)

// Funciones matemáticas (ya eran funciones, pero las mantenemos)
function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}

// Versiones con arrow functions (ya estaban)
let addArrow = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let subArrow = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let multArrow = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

// Función action (ya era función)
let action = function (callback, a, b) {
    return callback(a, b);
}

// Función para iniciar el contador con intervalo
function startCounter() {
    let counter = 1;
    let intervalId = setInterval(function () {
        console.log(counter++);
    }, 2000);
    setTimeout(function () {
        clearInterval(intervalId);
    }, 20000);
}

// Llamada a la función
startCounter();

// Funciones de Fibonacci (ya eran funciones)
let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));

function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}

// Array de contactos
let contacts = [
    {name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com"},
    {name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu"}
];

// Función para manejar la opción seleccionada
function handleChoice(choice) {
    if (choice == 1) {
        alert(`Nombre: ${contacts[0].name}\nTeléfono: ${contacts[0].phone}\nEmail: ${contacts[0].email}`);
    } else if (choice == 2) {
        alert(`Nombre: ${contacts[1].name}\nTeléfono: ${contacts[1].phone}\nEmail: ${contacts[1].email}`);
    } else if (choice == 3) {
        alert(contacts);
    } else if (choice == 4) {
        let name = prompt("Ingresa el nombre:");
        let phone = prompt("Ingresa el teléfono:");
        let email = prompt("Ingresa el email:");
        contacts.push({name, phone, email});
        alert("Contacto agregado");
    } else if (choice == 5) {
        return true; // Indica salir
    } else if (choice == 6) {
        let type = prompt("Ingresa el tipo (nombre, telefono, email):");
        let sortedContacts = [...contacts].sort((a, b) => {
            if (type === "nombre") return a.name.localeCompare(b.name);
            if (type === "telefono") return a.phone.localeCompare(b.phone);
            if (type === "email") return a.email.localeCompare(b.email);
            return 0;
        });
        alert(sortedContacts.map(c => {
            if (type === "nombre") return c.name;
            if (type === "telefono") return c.phone;
            if (type === "email") return c.email;
            return `${c.name} - ${c.phone} - ${c.email}`;
        }).join('\n'));
    } else {
        alert("Opción inválida");
    }
    return false; // Continuar
}

// Función principal para el menú de contactos
function contactMenu() {
    let choice;
    do {
        choice = prompt("Elige una opción:\n1. Mostrar primer contacto\n2. Mostrar segundo contacto\n3. Mostrar todos los contactos\n4. Agregar contactos\n5. Salir\n6. Agrupar contactos por tipo (nombre, teléfono o email)");
    } while (!handleChoice(choice));
}

// Llamada a la función del menú
contactMenu();
