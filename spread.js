const numbers = [ 12, 14, 15, 46, 45, 78 ];
console.log( numbers );
console.log( ...numbers );
const max = Math.max( 23, 26, 80 );
const maxInArray = Math.max( ...numbers );
console.log( max, maxInArray );

const number2 = [ 22, ...numbers, 45 ];
numbers.push( 100 );
console.log( number2 );