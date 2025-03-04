// 1 imprime en consola si el usuario y contraseña coincide con la establecidos
// 2 verifica si un numero es positivo, negativo o cero e imprime un mensaje en consola
// 3 verifica si una persona puede votar o no (mayor o igual a 18 años) e indique cuantos años faltan para que pueda votar
// 4 usa un operador ternario para asignar si el valor " adulto " o " menor" en una variable dependiendo la edad



// realizar un programa que determine que dia de la semana corresponde hoy, ingresandp p utilizandp la funcion prompt
/*

const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
}
    */
// utilizando la structura switch realizar el siguiente ejercicio donde el usuario dijite el nombre y el usuario con la siguiente verificacion
// 1 a 18 joven
//19 a 30 adulto 
// 41 a 60 maduro
// 61 en adelante anciano
/*

const nombre = prompt("Ingrese su nombre:");
const edad = Number(prompt("Ingrese su edad:"));


switch (true) {
case edad >= 1 && edad <= 18:
 console.log(`${nombre}, tienes ${edad} años, eres joven.`);
 break;
case edad >= 19 && edad <= 30:
 console.log(`${nombre}, tienes ${edad} años, eres adulto.`);
 break;
case edad >= 41 && edad <= 60:
 console.log(`${nombre}, tienes ${edad} años, eres maduro.`);
 break;
case edad >= 61:
 console.log(`${nombre}, tienes ${edad} años, eres anciano.`);
 break;
default:
 console.log("Edad no válida.");
}
*/

// Programa que dada la edad de una persona indique si es mayor o menor de edad. Se considera mayor de edad a partir de los 18 años.
/*
let nombre = prompt("Ingrese su nombre");
let edad = parseInt( prompt("Ingrese su edad"));
if (edad >= 18) {
    alert("hola " + nombre + " usted es mayor de edad");
}
else {
    alert("hola " + nombre + " usted es menor de edad");
}
    */
//3. Dado dos números A y B, determinar si A es mayor, menor o igual que B
/* 
let A = parseInt(prompt("Ingrese el valor de A"));
let B = parseInt(prompt("Ingrese el valor de B"));

if (A > B) {
    alert("A es mayor que B");
} else if (A < B) {
    console.log("A es menor que B");
} else {
    alert("A es igual a B");
} */

//5. Dado el peso de una persona:
//a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de
//Peso;
//b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso
//promedio;
//c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”
/*
let nombre = prompt("Ingrese su nombre");
let peso = parseInt( prompt("su peso"));

if (peso >= 1 && peso <= 40) {
    alert("hola " + nombre + " usted tiene muy bajo peso");
}
else if (peso >= 41 && peso <= 70) {
    alert("hola " + nombre + " usted esta con el peso promedio");
}
else if (peso >= 70 && peso <= 1000) {
    alert("hola " + nombre + " usted esta con sobre peso");
}
*/
//En un almacén se hace un 20% de descuento a los clientes cuya compra
//supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál
//será la cantidad que pagara una persona por su compra?
 /*
let compra = parseFloat(prompt("Ingrese el total de su compra:"));


let descuento;


if (compra > 1000) {
    descuento = compra * 0.20;
} else {
    descuento = compra * 0.05; 
}


let totalPagar = compra - descuento;

alert(`Total de la compra: $${compra.toFixed(2)}`);
alert(`Descuento aplicado: $${descuento.toFixed(2)}`);
alert(`Total a pagar: $${totalPagar.toFixed(2)}`); 
*/

//9. Programa que lea los nombres y edades de dos personas e imprima cuál de
//ellas tiene más edad.
/*
let Nombre = prompt("Ingrese su nombre:");
let Nombre1 = prompt("Ingrese otro nombre:");


let edad = parseInt(prompt("Ingrese la edad de " + Nombre + ":"));
let edad1 = parseInt(prompt("Ingrese la edad de " + Nombre1 + ":"));


if (edad > edad1) {
    alert("La persona con más edad es " + Nombre);
} else if (edad < edad1) {
    alert("La persona con más edad es " + Nombre1);
} else {
    alert("Ambos tienen la misma edad.");
}
*/
//11.Leer 2 números; si son iguales que los multiplique, si el primero es mayor
//que el segundo que los reste y si no que los sume.
 /*
let Num1 = parseInt(prompt("ingrese un numero")); 
let Num2 = parseInt(prompt("ingrese otro numero"));
if (Num1 === Num2) {
    alert("los numeros son iguales y su multiplicacion es: " + Num1 * Num2);
} else if (Num1 > Num2) {
    alert("el primer numero es mayor que el segundo y su resta es: " + (Num1 - Num2));
} else {
    alert("el primer numero es menor que el segundo y su suma es: " + (Num1 + Num2));
}
    */
//13.Escribe un programa que determine si un número ingresado por el usuario
//es par o impar.
/*
let num = parseInt(prompt("Ingrese un número:"));
if (num % 2 === 0) {
    alert("El número es par.");
} else {
    alert("El número es impar.");
}
*/
//15.Crea un programa que solicite un número y verifique si es positivo, negativo
//o igual a cero.
/*
let num = parseInt(prompt("ingrese el numero"));
if (num > 0) {
    alert("el numero es positivo");
} else if (num < 0) {
    alert("el numero es negativo");
} else {
    alert("el numero es cero");
}

*/
//17.Escribe un programa que permita al usuario seleccionar una figura
//geométrica (triángulo y cuadrado) y luego calcule el área de esa figura
//ingresando los datos necesarios para cada caso.

// Pedir al usuario que seleccione una figura
/*
let figura = prompt("Seleccione una figura para calcular el área: triángulo o cuadrado").toLowerCase();

if (figura === "triángulo" || figura === "triangulo") {
    // Pedir base y altura para el triángulo
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores numéricos positivos.");
    } else {
        let areaTriangulo = (base * altura) / 2;
        alert(`El área del triángulo es: ${areaTriangulo.toFixed(2)}`);
    }

} else if (figura === "cuadrado") {
    // Pedir el lado del cuadrado
    let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));

    if (isNaN(lado) || lado <= 0) {
        alert("Por favor, ingrese un valor numérico positivo.");
    } else {
        let areaCuadrado = lado * lado;
        alert(`El área del cuadrado es: ${areaCuadrado.toFixed(2)}`);
    }

} else {
    alert("Figura no reconocida. Por favor, elija 'triángulo' o 'cuadrado'.");
}
*/
/*
19.Diseña un programa que solicite el nombre de un usuario y su contraseña. Si
el nombre es "admin" y la contraseña es "12345", muestra un mensaje de
acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.
*/
 
let nombre = prompt("Ingrese su nombre:");
let contrasena = prompt("Ingrese su contraseña:");

if (nombre === "admin" && contrasena === "12345") {
    alert("Acceso concedido");
} else {
    alert("Acceso denegado");
}