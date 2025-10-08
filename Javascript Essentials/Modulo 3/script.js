// Ejercicios 3.0 

n1 = 2;
n2 = 3;
n3 = 1;
n4 = 4;
n5 = 5;
n6 = 8;

console.log(n1 + ++n2 + n3);        
console.log(n1 ** n4);
console.log(n5 * n3);       
console.log(n6 * n5 - n1 / n1);

console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);  
console.log(25 > 1);  
console.log(2 + 2 * 2 != 4);

console.log(true || false);  
console.log(!(false && false));  
console.log(!(false && false && true));
console.log(true || false && false && true);

// Ejercicios 3.2

document.getElementById('myDiv').addEventListener('click', function() {
    const div = this;
    const width = div.offsetWidth;
    const height = div.offsetHeight;
    alert('Width: ' + width + ', Height: ' + height);
});

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

// Para agregar mas contactos
function addContact(name, phone, email) {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    });
}

// Ejemplos
addContact("John Doe", "123-456-7890", "john.doe@example.com");
addContact("Jane Smith", "098-765-4321", "jane.smith@example.com");


let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);