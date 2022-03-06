function add( num1 = 0, num2 = 0 ) {
    const result = num1 + num2;
    return result;
}
const result = add( 12, 50 );
console.log( result );

function fullName( firstname, lastname = 'Khan' ) {
    const name = firstname + ' ' + lastname;
    return name;
}
const name = fullName( 'Tamim' );
console.log( name );