// Laboratorio #1

// Declarar objetos para las pinturas
const pinturas = [
    {
        titulo: "Mona Lisa",
        artista: "Leonardo da Vinci",
        fecha: 1503
    },
    {
        titulo: "La Última Cena",
        artista: "Leonardo da Vinci",
        fecha: 1495
    },
    {
        titulo: "La Noche Estrellada",
        artista: "Vincent van Gogh",
        fecha: 1889
    },
    {
        titulo: "El Grito",
        artista: "Edvard Munch",
        fecha: 1893
    },
    {
        titulo: "Guernica",
        artista: "Pablo Picasso",
        fecha: 1937
    },
    {
        titulo: "El Beso",
        artista: "Gustav Klimt",
        fecha: 1907
    },
    {
        titulo: "La Joven de la Perla",
        artista: "Johannes Vermeer",
        fecha: 1665
    },
    {
        titulo: "El Nacimiento de Venus",
        artista: "Sandro Botticelli",
        fecha: 1485
    },
    {
        titulo: "Las Meninas",
        artista: "Diego Velázquez",
        fecha: 1656
    },
    {
        titulo: "La Creación de Adán",
        artista: "Miguel Ángel",
        fecha: 1512
    }
];

// Mostrar todas las pinturas en la consola
pinturas.forEach(pintura => {
    console.log(`${pintura.titulo}, por ${pintura.artista}, ${pintura.fecha}`);
}); 

// Laboratorio #2

// Función constructora Imagen
function Imagen(titulo, artista, fecha) {
    this.titulo = titulo;
    this.artista = artista;
    this.fecha = fecha;
}

// Función fábrica obtenerImagen
function obtenerImagen(titulo, artista, fecha) {
    return {
        titulo: titulo,
        artista: artista,
        fecha: fecha
    };
}

// Crear imágenes1 usando el constructor Imagen
const imágenes1 = pinturas.map(pintura => new Imagen(pintura.titulo, pintura.artista, pintura.fecha));

// Crear imágenes2 usando la fábrica obtenerImagen desde imágenes1
const imágenes2 = imágenes1.map(imagen => obtenerImagen(imagen.titulo, imagen.artista, imagen.fecha));

// Mostrar el contenido de imágenes2
console.log("Contenido de imágenes2:");
imágenes2.forEach(imagen => {
    console.log(`${imagen.titulo} por ${imagen.artista}, ${imagen.fecha}`);
});

// Laboratorio #3

// Objeto imágenes con métodos
const imágenes = {
    lista: [],

    contains: function(titulo) {
        return this.lista.some(imagen => imagen.titulo === titulo);
    },

    add: function(titulo, artista, fecha) {
        if (!this.contains(titulo)) {
            const nuevaImagen = new Imagen(titulo, artista, fecha);
            this.lista.push(nuevaImagen);
        }
    },

    show: function() {
        this.lista.forEach(imagen => {
            console.log(`${imagen.titulo} (${imagen.artista}, ${imagen.fecha})`);
        });
    },

    clear: function() {
        this.lista = [];
    }
};

// Pruebas del objeto imágenes
imágenes.add('Mona Lisa', 'Leonardo da Vinci', 1503);
imágenes.add('The Last Supper', 'Leonardo da Vinci', 1495);
imágenes.add('The Starry Night', 'Vincent van Gogh', 1889);
imágenes.add('Mona Lisa', 'Leonardo da Vinci', 1503); // No debería agregarse de nuevo
imágenes.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> The Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
imágenes.clear();
imágenes.show(); // No debería mostrar nada

// Laboratorio #4

// Añadir método show al prototipo de Imagen
Imagen.prototype.show = function() {
    console.log(`${this.titulo} (${this.artista}, ${this.fecha})`);
};

// Complementar el objeto imágenes con nuevos métodos
imágenes.editar = function(titulo, artista, fecha) {
    const index = this.lista.findIndex(imagen => imagen.titulo === titulo);
    if (index !== -1) {
        this.lista[index].artista = artista;
        this.lista[index].fecha = fecha;
    }
};

imágenes.borrar = function(titulo) {
    const index = this.lista.findIndex(imagen => imagen.titulo === titulo);
    if (index !== -1) {
        this.lista.splice(index, 1);
    }
};

// Modificar el método show del objeto imágenes para usar el método show de cada imagen
imágenes.show = function() {
    this.lista.forEach(imagen => imagen.show());
};

// Laboratorio #5

// Función deepComp para comparación profunda
function deepComp(obj1, obj2) {
    // Si no son objetos o son null, comparar directamente
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return false;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

    // Si son arrays, comparar como arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!deepComp(obj1[i], obj2[i])) return false;
        }
        return true;
    }

    // Si uno es array y el otro no, no son iguales
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;

    // Comparar propiedades enumerables, ignorando métodos
    const keys1 = Object.keys(obj1).filter(key => typeof obj1[key] !== 'function');
    const keys2 = Object.keys(obj2).filter(key => typeof obj2[key] !== 'function');

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepComp(obj1[key], obj2[key])) return false;
    }

    return true;
}
