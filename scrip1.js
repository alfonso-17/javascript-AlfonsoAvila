// ejemplo 1 - DECLARAR DOS VARIABLES UNA QUE SEA EL NOMBRE Y LA OTRA LA EDAD//

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
//el usuario dijite nombre y edad con la siguiente verificacion //
/* 
1 a 18 años es joven
19 a 40 años es adulto 
41 a 60 años es maduro
61 en adelante es anciano
*/   

/*
let nombre = prompt("Ingrese su nombre");
let edad = parseInt( prompt("Ingrese su edad"));

if (edad >= 1 && edad <= 18) {
    alert("hola " + nombre + " usted es joven");
}
else if (edad >= 19 && edad <= 40) {
    alert("hola " + nombre + " usted es adulto");
}
else if (edad >= 41 && edad <= 60) {
    alert("hola " + nombre + " usted es maduro");
}
else {
    alert("hola " + nombre + " usted es anciano");
} 
    */
/*
// iniciamos la variable fuera del bucle
let cuentaAtras = parseInt( prompt("Ingrese las veces que desea que se repita el ciclo"));

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')

*/

// imprimir 5 edades de diferentes personas y determinar si son mayores de edad //

// Definir las edades de 5 personas
// Solicitar edades al usuario\
/*
let edad1 = prompt("Ingrese la edad de la persona 1");
let edad2 = prompt("Ingrese la edad de la persona 2");
let edad3 = prompt("Ingrese la edad de la persona 3");
let edad4 = prompt("Ingrese la edad de la persona 4");
let edad5 = prompt("Ingrese la edad de la persona 5");

 Convertir las entradas a números
const edades = [Number(edad1), Number(edad2), Number(edad3), Number(edad4), Number(edad5)];

let i = 0; // Inicializar el contador

// Usar do...while para recorrer el array
do {
    if (edades[i] >= 18) {
        console.log(`Persona ${i + 1}: ${edades[i]} años - Mayor de edad`);
    } else {
        console.log(`Persona ${i + 1}: ${edades[i]} años - Menor de edad `);
    }
    i++; // Incrementar el contador
} while (i < edades.length); // Condición para continuar el ciclo
 
*/
/*
let persona = 0;
do{
    let nombre = promt("ingrese su nombre");
    let edad = parseInt(promt("ingrese su edad"));
    if(edad >= 18){
        alert (nombre + " es mayor de edad");
    }else{
        alert (nombre + " es menor de edad");
    }
    persona++;
}while(persona < 5)
    alert("se registraron " + persona + " persona");
    alert("fin del  programa");

    */
    /* imprimir las tablas del numero que el usuario ingrese de multiplicar del 1 al 10
    mostrar en pantalla en la siguiente sintaxis */

  

let num = prompt("Ingrese el número para ver su tabla de multiplicar");


    for (let i = 1; i <= 10; i++) {
let resultado = num * i;
document.write(num + " x " + i + " = " + resultado + "<br>");
      }