// Ejercicios 4.0

var usuario = prompt("Digita un número: ")

if (usuario > 90) {
    console.log("Extraño")
} else if (usuario < 100) {
    console.log("Extraño")
}

let number = prompt("Ingresa un número aleatorio"); let message = (number > 90 && number < 110) ? "¡Bingo!": "Error"; alert(message);

let firstNumber = Number(prompt("Ingrese el primer número")); 
let secondNumber = Number(prompt("Ingrese el segundo número")); 
let operand = prompt("Ingrese el operando (+, -, * o /)");
let result; 
if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) { 
    switch (operand) { 
        case "+": result = firstNumber + secondNumber; 
        break; 
        case "-": result = firstNumber - secondNumber; 
        break; 
        case "*": result = firstNumber * secondNumber; 
        break; case "/": result = firstNumber / secondNumber; 
        break; default: result = "Error: operando desconocido"; } 
    } else { 
        result = "Error: al menos uno de los valores ingresados ​​no es un número"; } 
        alert(result);

let contacts = [
    {name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com"},
    {name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu"}
];

let choice;
do {
    choice = prompt("Elige una opción:\n1. Mostrar primer contacto\n2. Mostrar segundo contacto\n3. Agregar nuevo contacto\n4. Salir");
    if (choice == 1) {
        alert(`Nombre: ${contacts[0].name}\nTeléfono: ${contacts[0].phone}\nEmail: ${contacts[0].email}`);
    } else if (choice == 2) {
        alert(`Nombre: ${contacts[1].name}\nTeléfono: ${contacts[1].phone}\nEmail: ${contacts[1].email}`);
    } else if (choice == 3) {
        let name = prompt("Ingresa el nombre:");
        let phone = prompt("Ingresa el teléfono:");
        let email = prompt("Ingresa el email:");
        contacts.push({name, phone, email});
        alert("Contacto agregado");
    } else if (choice == 4) {
        break;
    } else {
        alert("Opción inválida");
    }
} while (choice != 4);

// Ejercicios 4.1 

let upperLimit = Number(prompt("Ingrese el límite superior"));
let lowerLimit = Number(prompt("Ingrese el límite inferior")); 

if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) { 
    for (i = upperLimit; i >= lowerLimit; i -= 10) { 
        console.log(i); } 
    }

    let número = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (número of números) {
    console.log(número);
}

for (número of números) {
    if (número % 2 === 0) {
        console.log(número);
    }
}

for (número of números) {
    if (número > 10 && número < 60) {
        console.log(número);
    }
}

let peliculas = [];
while (true) {
    let titulo = prompt("Ingresa el titulo de la pelicula");
    let rating = prompt("ingresa el rating (imdb)");

    if (titulo === null || rating === null) {
        break
    } else {
        peliculas.push({
            titulo: titulo,
            rating: Number(rating)
        });
    }
}

console.log("Todas las peliculas con ratings por debajo de 7:");
for (pelicula of peliculas) {
    if (pelicula.rating < 7) {
        console.log(`${pelicula.titulo} (${pelicula.rating})`);
    }
}

console.log("Todas las peliculas con ratings por debajo de 7:");
for (pelicula of peliculas) {
    if (pelicula.rating >= 7) {
        console.log(`${pelicula.titulo} (${pelicula.rating})`);
        break;
    }
}

let contacts = [
    {name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com"},
    {name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu"}
];

let choice;
do {
    choice = prompt("Elige una opción:\n1. Mostrar primer contacto\n2. Mostrar segundo contacto\n3. Mostrar todos los contactos\n4. Agregar contactos\n5. Salir");
    if (choice == 1) {
        alert(`Nombre: ${contacts[0].name}\nTeléfono: ${contacts[0].phone}\nEmail: ${contacts[0].email}`);
    } else if (choice == 2) {
        alert(`Nombre: ${contacts[1].name}\nTeléfono: ${contacts[1].phone}\nEmail: ${contacts[1].email}`);
    } else if (choice == 3) {
        alert(contacts)
    } else if (choice == 4) {
        let name = prompt("Ingresa el nombre:");
        let phone = prompt("Ingresa el teléfono:");
        let email = prompt("Ingresa el email:");
        contacts.push({name, phone, email});
        alert("Contacto agregado");
    } else if (choice == 5) {
        break;
    } else {
        alert("Opción inválida");
    }
} while (choice != 5);