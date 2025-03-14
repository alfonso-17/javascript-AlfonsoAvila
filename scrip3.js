/*
incorporar la conceptualización en
comentarios y por cada tema realizar ejemplos de los siguiente temas de
JavaScript:
• Funciones.
• Arreglos.
• Programación Orientado a objetos.
• Manejo de evento y el DOM (Document Object Model).
• Módulos.
• Programación Asíncrona.
*/
/*
1. Funciones
Las funciones son uno de los bloques fundamentales de JavaScript. Permiten encapsular código para que pueda ser reutilizado y ejecutado en diferentes partes de un programa.

Tipos de Funciones:
Funciones Declaradas: Se definen usando la palabra clave function.

Funciones Anónimas: No tienen nombre y se asignan a variables.

Arrow Functions: Sintaxis moderna y concisa para definir funciones.

Ejemplos: */


// 1. Función Declarada
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3)); // Salida: 5

// 2. Función Anónima
const restar = function(a, b) {
    return a - b;
};
console.log(restar(5, 3)); // Salida: 2

// 3. Arrow Function
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2)); // Salida: 8

// 4. Función con parámetros por defecto
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}!`;
}
console.log(saludar()); // Salida: Hola, Invitado!
console.log(saludar("Juan")); // Salida: Hola, Juan!

// 5. Función como argumento (callback)
function operacion(a, b, callback) {
    return callback(a, b);
}
const resultado = operacion(10, 5, (x, y) => x / y);

console.log(resultado); // Salida: 2
/*
2. Arreglos
Los arreglos son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Son dinámicos y pueden contener cualquier tipo de dato.

Métodos Comunes de Arreglos:
push(): Añade un elemento al final.

pop(): Elimina el último elemento.

shift(): Elimina el primer elemento.

unshift(): Añade un elemento al inicio.

map(): Crea un nuevo arreglo aplicando una función a cada elemento.

filter(): Filtra elementos basados en una condición.

reduce(): Reduce el arreglo a un solo valor.

Ejemplos:
*/

// Declaración de un arreglo
const numeros = [1, 2, 3, 4, 5];

// Añadir y eliminar elementos
numeros.push(6); // Añade 6 al final
console.log(numeros); // Salida: [1, 2, 3, 4, 5, 6]

numeros.pop(); // Elimina el último elemento
console.log(numeros); // Salida: [1, 2, 3, 4, 5]

// Recorrer un arreglo
numeros.forEach(num => console.log(num)); // Imprime cada número

// Método map (crea un nuevo arreglo)
const cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]

// Método filter (filtra elementos)
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // Salida: [2, 4]

// Método reduce (reduce a un solo valor)
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // Salida: 15

/*
3. Programación Orientada a Objetos (POO)
JavaScript es un lenguaje multiparadigma que soporta la programación orientada a objetos. Permite crear clases, objetos, herencia y encapsulación.

Conceptos Clave:
Clases: Plantillas para crear objetos.

Objetos: Instancias de una clase.

Herencia: Una clase puede heredar propiedades y métodos de otra.

Encapsulación: Ocultar detalles internos de una clase.

Ejemplos:
*/

// Definición de una clase
class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido() {
        console.log(`${this.nombre} dice ${this.sonido}`);
    }
}

// Creación de un objeto
const perro = new Animal("Perro", "Guau");
perro.hacerSonido(); // Salida: Perro dice Guau

// Herencia
class Gato extends Animal {
    constructor(nombre) {
        super(nombre, "Miau");
    }

    ronronear() {
        console.log(`${this.nombre} está ronroneando.`);
    }
}

const gato = new Gato("Michi");
gato.hacerSonido(); // Salida: Michi dice Miau
gato.ronronear(); // Salida: Michi está ronroneando.
/*
4. Manejo de Eventos y el DOM
El DOM (Document Object Model) es una representación de la estructura de un documento HTML. JavaScript permite manipular el DOM y manejar eventos como clics, movimientos del mouse, etc.

Ejemplo:
html
*/

javascript

// JavaScript
const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensaje");

// Manejo de evento click
boton.addEventListener("click", () => {
    mensaje.textContent = "¡Botón clickeado!";
});
/*
5. Módulos
Los módulos permiten dividir el código en archivos separados para una mejor organización y reutilización.

Ejemplo:
javascript
*/
// archivo math.js
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}
javascript

// archivo main.js
import { sumar, restar } from './math.js';

console.log(sumar(10, 5)); // Salida: 15
console.log(restar(10, 5)); // Salida: 5
/*
6. Programación Asíncrona
La programación asíncrona permite ejecutar tareas sin bloquear el hilo principal. Se usa comúnmente para operaciones como solicitudes HTTP o temporizadores.

Ejemplos:
javascript
 */
// Promesas
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Operación completada!");
    }, 2000);
});

promesa.then(mensaje => console.log(mensaje)); // Salida después de 2 segundos: ¡Operación completada!

// Async/Await
async function ejecutarOperacion() {
    const resultado = await promesa;
    console.log(resultado); // Salida después de 2 segundos: ¡Operación completada!
}

ejecutarOperacion();

// Fetch API (para solicitudes HTTP)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));