//Se suelen utilizar como objetos privados

const number = Symbol('number');
const result = Symbol('number2');

// console.log(number === result);
// console.log(number, result);
// console.log(typeof number,typeof result);

//?Agregar un symbol a un objeto

const NOMBRE = Symbol();

const persona = {
    [NOMBRE]: 'Juan',
}

console.log(persona);

persona.NOMBRE = 'Pedro';

console.log(persona);
console.log(persona[NOMBRE]);
console.log(persona.NOMBRE);

const SALUDAR = Symbol();

persona[SALUDAR] = function() {
    console.log('Hola');
}

console.log(Object.getOwnPropertySymbols(persona));