// Soluciones a los Ejercicios de Programación Orientada a Objetos en JavaScript

// 1. Object Literal
console.log("Ejercicio 1: Object Literal");
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    describir: function() {
        console.log(`Este coche es un ${this.marca} ${this.modelo} del año ${this.año}.`);
    }
};

coche.describir();

// 2. Object Constructor
console.log("\nEjercicio 2: Object Constructor");
function Libro(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.detalles = function() {
        console.log(`${this.titulo} fue escrito por ${this.autor} en el año ${this.año}.`);
    };
}

const libro1 = new Libro("1984", "George Orwell", 1949);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
libro1.detalles();
libro2.detalles();

// 3. Instancia y Métodos
console.log("\nEjercicio 3: Instancia y Métodos");
Libro.prototype.esMasAntiguo = function(otroLibro) {
    return this.año < otroLibro.año;
};

console.log(libro1.esMasAntiguo(libro2)); // true
console.log(libro2.esMasAntiguo(libro1)); // false

// 4. Prototype
console.log("\nEjercicio 4: Prototype");
Libro.prototype.resumen = function() {
    return `${this.titulo} por ${this.autor} (${this.año})`;
};

console.log(libro1.resumen());
console.log(libro2.resumen());

// 5. Clases en JavaScript (ES6+)
console.log("\nEjercicio 5: Clases en JavaScript");
class LibroES6 {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }

    detalles() {
        console.log(`${this.titulo} fue escrito por ${this.autor} en el año ${this.año}.`);
    }

    esMasAntiguo(otroLibro) {
        return this.año < otroLibro.año;
    }

    resumen() {
        return `${this.titulo} por ${this.autor} (${this.año})`;
    }
}

const libroES61 = new LibroES6("El Quijote", "Miguel de Cervantes", 1605);
const libroES62 = new LibroES6("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997);
libroES61.detalles();
console.log(libroES61.esMasAntiguo(libroES62));
console.log(libroES62.resumen());

// 6. Herencia con Clases
console.log("\nEjercicio 6: Herencia con Clases");
class Ebook extends LibroES6 {
    constructor(titulo, autor, año, formato) {
        super(titulo, autor, año);
        this.formato = formato;
    }

    detalles() {
        console.log(`${this.titulo} fue escrito por ${this.autor} en el año ${this.año}. Disponible en formato ${this.formato}.`);
    }
}

const ebook = new Ebook("La vida es sueño", "Pedro Calderón de la Barca", 1635, "PDF");
ebook.detalles();
console.log(ebook.resumen());
console.log(ebook.esMasAntiguo(libroES61));

// 7. Getters y Setters
console.log("\nEjercicio 7: Getters y Setters");
class LibroConGetSet extends LibroES6 {
    get edad() {
        return new Date().getFullYear() - this.año;
    }

    set año(nuevoAño) {
        if (nuevoAño > 0 && nuevoAño <= new Date().getFullYear()) {
            this._año = nuevoAño;
        } else {
            console.log("Año inválido");
        }
    }

    get año() {
        return this._año;
    }
}

const libroGetSet = new LibroConGetSet("Rayuela", "Julio Cortázar", 1963);
console.log(libroGetSet.edad);
libroGetSet.año = 1964;
console.log(libroGetSet.resumen());

// 8. Composición
console.log("\nEjercicio 8: Composición");
class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`${libro.titulo} ha sido añadido a la biblioteca.`);
    }

    eliminarLibro(titulo) {
        const indice = this.libros.findIndex(libro => libro.titulo === titulo);
        if (indice !== -1) {
            const libroEliminado = this.libros.splice(indice, 1)[0];
            console.log(`${libroEliminado.titulo} ha sido eliminado de la biblioteca.`);
        } else {
            console.log(`No se encontró el libro ${titulo} en la biblioteca.`);
        }
    }

    listarLibros() {
        console.log("Libros en la biblioteca:");
        this.libros.forEach(libro => console.log(libro.resumen()));
    }
}

const biblioteca = new Biblioteca();
biblioteca.agregarLibro(new LibroES6("Fahrenheit 451", "Ray Bradbury", 1953));
biblioteca.agregarLibro(new LibroES6("Orgullo y prejuicio", "Jane Austen", 1813));
biblioteca.listarLibros();
biblioteca.eliminarLibro("Fahrenheit 451");
biblioteca.listarLibros();
