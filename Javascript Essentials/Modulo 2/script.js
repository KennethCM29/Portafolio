/* 2.0 Ejercicios */

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

var Name = "Maxwell Right";
var Name2 = "Raja Villareal";
var Name3 = "Helen-Richards";

var tel = "(0191) 719 6495";
var tel2 = "0866-398-2895"; 
var tel3 = "0800-1111";

var email = "Curabitur.egestas.nunc@nonummyac.co.uk";
var email2 = "Vosuere.volputate@sed.com";
var email3 = "libero@convallis.com";

console.log(Name, tel, email)
console.log(Name2, tel2, email2)
console.log(Name3, tel3, email3)

/* Ejercicios 2.1 */

var bool = true;
var bool = Boolean(true);

var num = 50;
var num = Number(50);

var big = 100n; 
var big = BigInt(200); 

var str = "Hello";
var str = String("Hello");

console.log(bool, typeof bool)
console.log(num, typeof num)
console.log(big, typeof big)
console.log(str, str.slice(5))

console.log(Boolean (big))
console.log(Number (str))

console.log(num + big)
console.log(bool + num)
console.log(bool + big)
console.log(num + str)

/* Ejercicios 2.2 */

var billetetren = {
    EstacióndePartida: String("No sé"),
    EstaciónFinal: String("Honestamente no sé"),
    PrecioBillete: String("No se el precio")
}

console.log(billetetren.EstacióndePartida, billetetren.EstaciónFinal, billetetren.PrecioBillete)

var vacio = {
    nombre: undefined,
    apellido: undefined
}

console.log(vacio.nombre, vacio.apellido)

var biblioteca = {
    titulo: ["Hablando JavaScript", "Programación de aplicaciones JavaScript", "Comprensión de ECMAScript 6"],
    autor: ["Axel Rauschmayer", "Eric Elliott", "Nicholas C. Zakas"],
    NúmerodePáginas: [460, 254, 352]
}

console.log(biblioteca.titulo[0], biblioteca.autor[0], biblioteca.NúmerodePáginas[0])
console.log(biblioteca.titulo[1], biblioteca.autor[1], biblioteca.NúmerodePáginas[1])
console.log(biblioteca.titulo[2], biblioteca.autor[2], biblioteca.NúmerodePáginas[2])


biblioteca.titulo.push("La vida")
console.log(biblioteca.titulo.length)
console.log(biblioteca.titulo[0])
console.log(biblioteca.titulo[0], biblioteca.titulo[1], biblioteca.titulo[2], biblioteca.titulo[3])
console.log(biblioteca.titulo.slice(2, 4))
biblioteca.titulo.shift()
console.log(biblioteca.titulo.length)
console.log(biblioteca.titulo[0], biblioteca.titulo[1], biblioteca.titulo[2])
console.log(biblioteca.titulo[0] + biblioteca.titulo[1] + biblioteca.titulo[2])

let contacts = {
name: ["Maxwell Wright", "Raja Villarreal", "Helen Richards"],
phone: ["(0191) 719 6495", "0866 398 2895", "0800 1111"],
email: ["Curabitur.egestas.nunc@nonummyac.co.uk", "posuere.vulputate@sed.com", "libero@convallis.edu"] 
}

console.log(contacts.name[0], contacts.phone[0], contacts.email[0])
console.log(contacts.name[1], contacts.phone[1], contacts.email[1])
console.log(contacts.name[2], contacts.phone[2], contacts.email[2])

contacts.name.push("Maisie Haley")
contacts.phone.push("0913 531 3030")
contacts.email.push("risus.Quisque@urna.ca")

console.log(contacts.name.length)
console.log(contacts.phone.length)
console.log(contacts.email.length)
