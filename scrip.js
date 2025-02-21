/* 1. Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/
let descuento = 0.25;
let compra = 1500;
let total = compra - descuento*compra
console.log("si la compra fue de " + compra + " se debe multiplicar por el porcentaje dado siendo " + descuento + " dando asi resultado " + total)
/*Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual. */
let inversion = 50;
let paga_banco = 0.02;
let mes = 1;
let total_1 = inversion + (inversion * paga_banco * mes);
console.log("Si la inversión fue de " + inversion + " y el banco paga " + paga_banco + " mensual, después de " + mes + " mes(es) se tendrá un total de " + total_1);

/*3. Un alumno desea saber cuál será su nota final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let promedio = (nota1 + nota2 + nota3)/3;
let examen_final = 8;
let trabajo_final = 10;
let nota_final = (promedio*0.55) + (examen_final*0.30) + (trabajo_final*0.15);
console.log("Si las notas de los parciales fueron " + nota1 + ", " + nota2 + ", " + nota3 + ", la nota del examen final fue " + examen_final + " y la nota del trabajo final fue " + trabajo_final + ", la nota final es " + nota_final);

/* 4. El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.
*/

let precio_compra = 100;
let ganancia = 0.30;
let precio_venta = precio_compra + (precio_compra * ganancia);
console.log("Si el precio de compra fue de " + precio_compra + " y se desea obtener una ganancia del " + ganancia + " el precio de venta debe ser de " + precio_venta);


/*n taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.
*/

let km = 5;
let min = 10;
let precio_km = 15000;
let precio_min = 2000;
let total_2 = (km * precio_km) + (min * precio_min);
console.log("Si se recorrieron " + km + " km y se estuvo " + min + " minutos, el total a pagar es de " + total_2);


/* Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.
*/

let num1 = 2;
let num2 = 3;
let num3 = 4;
let cuadrado1 = num1*num1;
let cuadrado2 = num2*num2;
let cuadrado3 = num3*num3;
console.log("Si los números son " + num1 + ", " + num2 + ", " + num3 + ", los cuadrados son " + cuadrado1 + ", " + cuadrado2 + ", " + cuadrado3);

/* En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
Ginecología 40%
Pediatría 30% 
Traumatología 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
dado.
*/

let presupuesto = 1000000;
let ginecologia = 40;
let pediatria = 30;
let traumatologia = 30;
let presupuesto_ginecologia = presupuesto * (ginecologia/100);
let presupuesto_pediatria = presupuesto * (pediatria/100);
let presupuesto_traumatologia = presupuesto * (traumatologia/100);
console.log("Si el presupuesto anual es de " + presupuesto + ", el presupuesto para Ginecología es de " + presupuesto_ginecologia + ", para Pediatría es de " + presupuesto_pediatria + " y para Traumatología es de " + presupuesto_traumatologia);

/* El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/

let precio_compra_1 = 100;
let ganancia_1 = 0.30;
let precio_venta_1 = precio_compra_1 + (precio_compra_1 * ganancia_1);
console.log("Si el precio de compra fue de " + precio_compra_1 + " y se desea obtener una ganancia del " + ganancia_1 + " el precio de venta debe ser de " + precio_venta_1);

/* Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/
let inversion_1 = 50;
let inversion_2 = 10
let inversion_3 = 7;
let inversion_total = inversion_1 + inversion_2 + inversion_3;
let porcentaje_1 = (inversion_1/inversion_total)*100;
let porcentaje_2 = (inversion_2/inversion_total)*100;
let porcentaje_3 = (inversion_3/inversion_total)*100;
console.log("Si las inversiones fueron de " + inversion_1 + ", " + inversion_2 + ", " + inversion_3 + ", el porcentaje de la primera persona es de " + porcentaje_1 + ", de la segunda persona es de " + porcentaje_2 + " y de la tercera persona es de " + porcentaje_3);
/*. Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división.*/
let num1_1 = 3;
let num2_1 = 2;
let suma = num1_1 + num2_1;
let resta = num1_1 - num2_1;
let multiplicacion = num1_1 * num2_1;
let division = num1_1 / num2_1;
console.log("Si los números son " + num1_1 + " y " + num2_1 + ", la suma es " + suma + ", la resta es " + resta + ", la multiplicación es " + multiplicacion + " y la división es " + division);