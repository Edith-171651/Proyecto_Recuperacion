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

const array1 = [21, 2, 9, 13, 4];

const found = array1.find(element => element > 10);

console.log(array1.find);

