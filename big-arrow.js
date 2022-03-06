const add = ( num1, num2 ) => num1 + num2;
const sum = add( 12, 32 );
console.log( sum );

const multiply = ( num1, num2, num3 ) => num1 * num2 * num3;
const mul = multiply( 4, 3, 6 );
console.log( mul );

const tenTimes = ( num ) => num * 10;
const output = tenTimes( 10 );
console.log( output );

const fiveTimes = num => num * 5;
const value = fiveTimes( 10 );

const getName = () => 'Md Akbar Hossain';
const fullName = getName();
console.log( fullName );

//multiline arrow function
const doMath = ( a, b ) => {
    const add = a + b;
    const diff = a - b;
    const result = add * diff;
    const output = result * 5;
    return output;
};
const total = doMath( 10, 6 );
console.log( total );