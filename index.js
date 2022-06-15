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


