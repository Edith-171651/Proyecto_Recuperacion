/* Array map es funciona para que se aplica para cada uno de sus elementos
*/
/* Caso de uso saber cuales son los boletos más vendidos en  Ticketmaster
*/

var numbers = [20, 36, 40, 25];
var doubles = numbers.map(function(x) {
   return x * 2;
});


var numbers = [3, 7, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(numbers.map);

/* Array Filter este comprueba cada elemento donde cumple la condición 
este acepta tres parámetros currentValue,index,array, thisArg*/
/* Caso de uso saber cuales son los boletos más vendidos en  Ticketmaster
*/

const words = ['Rock&roll', 'Trova', 'pop', 'metal'];

const result = words.filter(word => word.length > 6);

console.log(result);

/* Array Find este regresa el valor del primer elemento que
 cumple la función*/
/* Caso de uso saber cuales son los boletos más vendidos en  Ticketmaster
*/

const array1 = [21, 2, 9, 13, 4];

const found = array1.find(element => element > 10);

console.log(array1.find);

/* Array reduce este ejecuta la funcón reductoraen cada 
elemento.
 */
/* Caso de uso saber cuales son los boletos más vendidos en  Ticketmaster
*/
const array1 = [5, 7, 8, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(array1.reduce);

/* Array findIndex devuelve el índice del primer elemento
de un arraypara que cumpla función proporcionada*/
/* Caso de uso saber cuales son los boletos más vendidos en  Ticketmaster
*/
 
const array1 = [15, 22, 80, 13, 6];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

/* Array replace devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo 
cada una de estas coincidencias reemplazadas por remplazo.*/

const p = 'My baby is very intelligent and her brother too?';

console.log(p.replace('baby', 'brother'));


const regex = /baby/i;

console.log(p.replace(regex, 'Alison')); 

/* Array hoisting es una manera general de referirse a cómo funcionan los contextos el cual puede
ser un poco confunso al principio*/
 

function nombredelconejo(nombre) {
    console.log("El nombre del conejo " + nombre);
  }
  
  nombredelconejo("Conejillo");

    /*Array ejemplos de promesas es un objeto que representa la terminacióno fracaso esta
  explicará cómo consumirlas*/

  new Promise((resolver, rechazar) => {
    console.log('Buena compra');

    resolver();
})
.then(() => {
    throw new Error('Venta no realizada');

    console.log('No se hizo compra');
})
.catch(() => {
    console.log('Venta exitosa');
})
.then(() => {
    console.log('Excelente elección de grupo');
})




