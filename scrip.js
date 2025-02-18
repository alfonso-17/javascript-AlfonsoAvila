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