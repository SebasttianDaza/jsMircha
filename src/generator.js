
function* gene() {
    yield 'Hola';
    console.log('Hay')
    yield 'Mundo';
    console.log("What's up?")
} 

let iterator = gene();
/* console.log(iterator.next());
console.log(iterator.next()); */

const arr = [...gene()];
//console.log(arr);

//*Ejemplo

function cuadrado (v) {
    setTimeout(() => {
        console.log(v * v);
    }, Math.random() * 1000);
}

function* genera () {
    console.log('Inicio');
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(14);
    yield cuadrado(12);
    console.log('Fin');
}

for (let y of genera()) {
    console.log(y);
}