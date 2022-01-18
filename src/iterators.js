// Elemento iterable
const arr = 'Hola  mundo';

// Elemento iterador
const iterador = arr[Symbol.iterator]();
console.log(iterador.next());

let next = iterador.next();

while(!next.done) {
    console.log(next.value);
    next = iterador.next();
}