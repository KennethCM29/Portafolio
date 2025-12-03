// Ejercicio #1

function getRandomSet(m, n, allowRepeats, sort) {
    const result = [];
    const used = new Set();

    while (result.length < m) {
        const num = Math.floor(Math.random() * (n + 1));
        if (allowRepeats || !used.has(num)) {
            result.push(num);
            if (!allowRepeats) {
                used.add(num);
            }
        }
    }

    if (sort) {
        result.sort((a, b) => a - b);
    }

    return result;
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));

// Ejercicio #2

class User {
    #nombre;
    #apellido;
    #correo;

    constructor(nombre, apellido, correo) {
        this.#validateNombre(nombre);
        this.#validateApellido(apellido);
        this.#validateCorreo(correo);
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#correo = correo;
    }

    #validateNombre(nombre) {
        const regex = /^[A-Z][a-z]+$/;
        if (!regex.test(nombre)) {
            throw new Error('Nombre inválido: debe comenzar con mayúscula y contener solo letras.');
        }
    }

    #validateApellido(apellido) {
        const regex = /^[A-Z][a-z]+$/;
        if (!regex.test(apellido)) {
            throw new Error('Apellido inválido: debe comenzar con mayúscula y contener solo letras.');
        }
    }

    #validateCorreo(correo) {
        const regex = /^[a-zA-Z]+(\.[a-zA-Z]+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
        if (!regex.test(correo)) {
            throw new Error('Correo electrónico inválido: solo letras y puntos permitidos.');
        }
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#validateNombre(value);
        this.#nombre = value;
    }

    get apellido() {
        return this.#apellido;
    }

    set apellido(value) {
        this.#validateApellido(value);
        this.#apellido = value;
    }

    get correo() {
        return this.#correo;
    }

    set correo(value) {
        this.#validateCorreo(value);
        this.#correo = value;
    }

    toString() {
        return `User { nombre: '${this.#nombre}', apellido: '${this.#apellido}', correo: '${this.#correo}' }`;
    }
}

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1.toString());
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
} catch(err) {
    console.log(err.message);
}

// Ejercicio #3

class Users {
    #users;

    constructor() {
        this.#users = new Map();
    }

    add(nombre, apellido, correo) {
        if (this.#users.has(correo)) {
            throw new Error('Usuario con este correo electrónico ya existe.');
        }
        const user = new User(nombre, apellido, correo);
        this.#users.set(correo, user);
    }

    delete(correo) {
        if (!this.#users.has(correo)) {
            throw new Error('Usuario no encontrado.');
        }
        this.#users.delete(correo);
    }

    get(correo) {
        if (!this.#users.has(correo)) {
            throw new Error('Usuario no encontrado.');
        }
        return this.#users.get(correo);
    }

    getAll(field) {
        const users = Array.from(this.#users.values());
        switch (field) {
            case 'nombre':
                return users.sort((a, b) => a.nombre.localeCompare(b.nombre));
            case 'apellido':
                return users.sort((a, b) => a.apellido.localeCompare(b.apellido));
            case 'correo':
            case 'correo electrónico':
                return users.sort((a, b) => a.correo.localeCompare(b.correo));
            default:
                throw new Error('Campo inválido para ordenar.');
        }
    }
}

try {
    let users = new Users();
    users.add("Aaaa", "Bbbb", "cccc@gmail.com");
    users.add("Mmmm", "Ffff", "eeee@gmail.com");
    users.add("Aaaa", "Bbbb", "cccc@gmail.com"); // This should throw an error
    users.add("Xxxx", "Oooo", "dddd@gmail.com");
    console.log(users.get("dddd@gmail.com"));
    console.log(users.getAll("nombre").map(u => u.nombre));
    console.log(users.getAll("apellido").map(u => u.apellido));
    console.log(users.getAll("correo electrónico").map(u => u.correo));
} catch (err) {
    console.log(err.message);
}

// Ejercicio #4

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = 'punto';
    }
}

class Línea {
    constructor(coordinates) {
        this.type = 'línea';
        this.points = coordinates.map(coord => new Punto(coord[0], coord[1]));
    }
}

class Figura {
    constructor(elements = []) {
        this.elements = { points: [], lines: [] };
        elements.forEach(element => {
            if (element.type === 'punto') {
                this.addPoint(element.x, element.y);
            } else if (element.type === 'línea') {
                this.addLine(element.points.map(p => [p.x, p.y]));
            }
        });
    }

    addPoint(x, y) {
        const exists = this.elements.points.some(p => p.x === x && p.y === y);
        if (!exists) {
            this.elements.points.push(new Punto(x, y));
        }
    }

    addLine(coordinates) {
        const newLinePoints = coordinates.map(coord => new Punto(coord[0], coord[1]));
        const exists = this.elements.lines.some(l =>
            l.points.length === newLinePoints.length &&
            l.points.every((p, i) => p.x === newLinePoints[i].x && p.y === newLinePoints[i].y)
        );
        if (!exists) {
            this.elements.lines.push(new Línea(coordinates));
        }
    }

    sortPoints() {
        this.elements.points.sort((a, b) => a.x - b.x || a.y - b.y);
    }

    sortLines() {
        this.elements.lines.sort((a, b) => {
            const aFirst = a.points[0];
            const bFirst = b.points[0];
            return aFirst.x - bFirst.x || aFirst.y - bFirst.y;
        });
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(json, append = false) {
        const data = JSON.parse(json);
        if (!append) {
            this.elements.points = [];
            this.elements.lines = [];
        }
        if (data.points) {
            data.points.forEach(p => this.addPoint(p.x, p.y));
        }
        if (data.lines) {
            data.lines.forEach(l => this.addLine(l.points.map(p => [p.x, p.y])));
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

let f = new Figura();
f.addPoint(10, 20);
f.addPoint(10, 10);
f.addLine([[10, 20], [30, 40], [50, 60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);

// Test sorting and duplicates
f.addPoint(10, 20); // duplicate, should not add
f.addLine([[10, 20], [30, 40], [50, 60]]); // duplicate, should not add
