// Laboratorio #1

// Función para simular el envío de email
function sendEmail(de, para, mensaje) {
    // Simulación: en un entorno real, aquí se enviaría el email
    console.log(`Email enviado de ${de} a ${para}: ${mensaje}`);
}

// Clase User para crear objetos de estudiantes y profesores
class User {
    constructor(data) {
        this.name = data.name;
        this.surname = data.surname;
        this.email = data.email;
        this.role = data.role;
    this.courses = []; // Array para almacenar cursos como objetos {course, level}
    this.messages = []; // Array para almacenar el historial de mensajes enviados
    this.receivedMessages = []; // Array para almacenar el historial de mensajes recibidos
    }

    // Método para agregar un curso con su nivel
    addCourse(course, level) {
        this.courses.push({ course, level });
    }

    // Método para eliminar un curso
    removeCourse(course) {
        this.courses = this.courses.filter(c => c.course !== course);
    }

    // Método para editar el nivel de un curso
    editCourse(course, level) {
        const c = this.courses.find(c => c.course === course);
        if (c) {
            c.level = level;
        } else {
            this.courses.push({ course, level });
        }
    }

    // Método para enviar un mensaje a otro usuario y almacenarlo en el historial
    sendMessage(to, message) {
        this.messages.push({ to: to.email, message });
        to.receivedMessages.push({ from: this.email, message });
        sendEmail(this.email, to.email, message);
    }

    // Método para mostrar el historial de mensajes enviados en la consola
    showMessagesHistory() {
        console.log(`Messages sent by ${this.name} ${this.surname}:`);
        this.messages.forEach((msg, index) => {
            console.log(`${index + 1}. To: ${msg.to} - Message: ${msg.message}`);
        });
    }
}

// Código de prueba proporcionado
let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();

// Laboratorio #2

// Clase UsuarioExtendido que hereda de User
class UsuarioExtendido extends User {
    constructor(data) {
        super(data);
    }

    // Getter para fullName
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    // Setter para fullName
    set fullName(full) {
        const parts = full.split(' ');
        this.name = parts[0];
        this.surname = parts.slice(1).join(' ');
    }
}

// Código de prueba para las nuevas clases
let student1_new = new UsuarioExtendido({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let teacher1_new = new UsuarioExtendido({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1_new.addCourse('maths', 2);
teacher1_new.addCourse('biology', 3);
teacher1_new.editCourse('chemistry', 4);
console.log(`${student1_new.fullName}: ${student1_new.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1_new.fullName}: ${teacher1_new.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1_new.fullName = 'Rafael Fifer';
console.log(`${student1_new.fullName}: ${student1_new.courses.length} courses`); // -> Rafael Fifer: 1 courses

// Laboratorio #3

// Clase ExtendedUser que hereda de User (modificada con método estático match)
class ExtendedUser extends User {
    constructor(data) {
        super(data);
    }

    // Getter para fullName
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    // Setter para fullName
    set fullName(full) {
        const parts = full.split(' ');
        this.name = parts[0];
        this.surname = parts.slice(1).join(' ');
    }

    // Método estático match
    static match(teacher, student, courseName = null) {
        if (courseName) {
            // Buscar coincidencia para un curso específico
            const studentCourse = student.courses.find(c => c.course === courseName);
            const teacherCourse = teacher.courses.find(c => c.course === courseName);
            if (studentCourse && teacherCourse && teacherCourse.level >= studentCourse.level) {
                return { course: courseName, level: studentCourse.level };
            } else {
                return undefined;
            }
        } else {
            // Devolver array de coincidencias
            const matches = [];
            for (const sCourse of student.courses) {
                const tCourse = teacher.courses.find(c => c.course === sCourse.course);
                if (tCourse && tCourse.level >= sCourse.level) {
                    matches.push({ course: sCourse.course, level: sCourse.level });
                }
            }
            return matches;
        }
    }
}

// Clase Student que hereda de ExtendedUser
class Student extends ExtendedUser {
    constructor(data) {
        super({ ...data, role: 'student' });
    }
}

// Clase Teacher que hereda de ExtendedUser
class Teacher extends ExtendedUser {
    constructor(data) {
        super({ ...data, role: 'teacher' });
    }
}

// Código de prueba para el método match
let student1_lab3 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2_lab3 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1_lab3 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1_lab3.addCourse('maths', 2);
student1_lab3.addCourse('physics', 4);
teacher1_lab3.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1_lab3, student1_lab3);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1_lab3.editCourse('maths', 1);
match = ExtendedUser.match(teacher1_lab3, student1_lab3);
console.log(match); // -> []
teacher1_lab3.addCourse('physics', 4);
match = ExtendedUser.match(teacher1_lab3, student1_lab3, 'physics');
console.log(match); // -> {course: 'physics', level: 4}

// Laboratorio #4

class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    // Método para obtener estudiante por nombre y apellido
    getStudentByName(name, surname) {
        return this.students.find(student => student.name === name && student.surname === surname);
    }

    // Método para obtener profesor por nombre y apellido
    getTeacherByName(name, surname) {
        return this.teachers.find(teacher => teacher.name === name && teacher.surname === surname);
    }

    // Método para obtener estudiantes para un profesor
    getStudentsForTeacher(teacher) {
        const matchingStudents = [];
        for (const student of this.students) {
            const matches = ExtendedUser.match(teacher, student);
            if (matches.length > 0) {
                matchingStudents.push(student);
            }
        }
        return matchingStudents;
    }

    // Método para obtener profesores para un estudiante
    getTeacherForStudent(student) {
        const matchingTeachers = [];
        for (const teacher of this.teachers) {
            const matches = ExtendedUser.match(teacher, student);
            if (matches.length > 0) {
                matchingTeachers.push(teacher);
            }
        }
        return matchingTeachers;
    }

    // Método para agregar un estudiante
    addStudent(name, surname, email) {
        const student = new Student({ name, surname, email });
        this.students.push(student);
    }

    // Método para agregar un profesor
    addTeacher(name, surname, email) {
        const teacher = new Teacher({ name, surname, email });
        this.teachers.push(teacher);
    }
}

// Código de prueba para Tutoring
let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife', 'rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

// Laboratorio #5

// Clase ExtendedTutoring que hereda de Tutoring
class ExtendedTutoring extends Tutoring {
    constructor() {
        super();
    }

    // Método para enviar mensajes a múltiples destinatarios
    sendMessages(from, to, message) {
        for (const recipient of to) {
            from.sendMessage(recipient, message);
        }
    }
}

// Código de prueba para ExtendedTutoring
let extendedTutoring = new ExtendedTutoring();
extendedTutoring.addStudent('Rafael', 'Fife', 'rfife@rhyta.com');
extendedTutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
extendedTutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(extendedTutoring.getStudentByName('Rafael', 'Fife'));
to.push(extendedTutoring.getStudentByName('Kelly', 'Estes'));
extendedTutoring.sendMessages(extendedTutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for (let user of to) {
    user.showMessagesHistory();
}
