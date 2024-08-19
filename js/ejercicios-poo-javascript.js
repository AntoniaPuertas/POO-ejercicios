// Ejercicios de Programación Orientada a Objetos en JavaScript

// 1. Object Literal
console.log("Ejercicio 1: Object Literal");
// Crea un objeto literal llamado 'coche' con propiedades: marca, modelo, año, y un método 'describir' que imprima sus detalles.
const coche = {
    // Tu código aquí
};

// Prueba el objeto
// coche.describir();

// 2. Object Constructor
console.log("\nEjercicio 2: Object Constructor");
// Crea un constructor 'Libro' que acepte título, autor y año de publicación. Añade un método 'detalles' que imprima la información del libro.
function Libro(titulo, autor, año) {
    // Tu código aquí
}

// Crea dos instancias de Libro y muestra sus detalles
// const libro1 = new Libro("1984", "George Orwell", 1949);
// const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
// libro1.detalles();
// libro2.detalles();

// 3. Instancia y Métodos
console.log("\nEjercicio 3: Instancia y Métodos");
// Usando el constructor 'Libro' del ejercicio anterior, añade un método 'esMasAntiguo(otroLibro)' que devuelva true si el libro es más antiguo que 'otroLibro'.
// Añade el método aquí

// Prueba el nuevo método
// console.log(libro1.esMasAntiguo(libro2));
// console.log(libro2.esMasAntiguo(libro1));

// 4. Prototype
console.log("\nEjercicio 4: Prototype");
// Añade un método al prototype de 'Libro' llamado 'resumen' que devuelva una cadena con el formato "TÍTULO por AUTOR (AÑO)".
// Añade el método al prototype aquí

// Prueba el nuevo método del prototype
// console.log(libro1.resumen());
// console.log(libro2.resumen());

// 5. Clases en JavaScript (ES6+)
console.log("\nEjercicio 5: Clases en JavaScript");
// Reescribe el constructor 'Libro' como una clase ES6. Incluye los métodos 'detalles', 'esMasAntiguo' y 'resumen'.
class LibroES6 {
    // Tu código aquí
}

// Crea instancias y prueba los métodos
// const libroES61 = new LibroES6("El Quijote", "Miguel de Cervantes", 1605);
// const libroES62 = new LibroES6("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997);
// libroES61.detalles();
// console.log(libroES61.esMasAntiguo(libroES62));
// console.log(libroES62.resumen());

// 6. Herencia con Clases
console.log("\nEjercicio 6: Herencia con Clases");
// Crea una clase 'Ebook' que herede de 'LibroES6'. Añade una propiedad 'formato' y sobrescribe el método 'detalles' para incluir esta información.
class Ebook extends LibroES6 {
    // Tu código aquí
}

// Crea una instancia de Ebook y prueba sus métodos
// const ebook = new Ebook("La vida es sueño", "Pedro Calderón de la Barca", 1635, "PDF");
// ebook.detalles();
// console.log(ebook.resumen());
// console.log(ebook.esMasAntiguo(libroES61));

// 7. Getters y Setters
console.log("\nEjercicio 7: Getters y Setters");
// Modifica la clase LibroES6 para incluir un getter que devuelva la edad del libro y un setter que permita cambiar el año de publicación.
class LibroConGetSet extends LibroES6 {
    // Tu código aquí
}

// Prueba los getters y setters
// const libroGetSet = new LibroConGetSet("Rayuela", "Julio Cortázar", 1963);
// console.log(libroGetSet.edad);
// libroGetSet.año = 1964;
// console.log(libroGetSet.resumen());

// 8. Composición
console.log("\nEjercicio 8: Composición");
// Crea una clase 'Biblioteca' que tenga una colección de libros (instancias de LibroES6). Incluye métodos para añadir libros, eliminar libros y listar todos los libros.
class Biblioteca {
    // Tu código aquí
}

// Prueba la clase Biblioteca
// const biblioteca = new Biblioteca();
// biblioteca.agregarLibro(new LibroES6("Fahrenheit 451", "Ray Bradbury", 1953));
// biblioteca.agregarLibro(new LibroES6("Orgullo y prejuicio", "Jane Austen", 1813));
// biblioteca.listarLibros();
// biblioteca.eliminarLibro("Fahrenheit 451");
// biblioteca.listarLibros();
