
//* Crear un set

const set = new Set([1,2,3,3, {a:1}, {a:1}, {a:1}]);
console.log(set);

//No deja repetir añadir valores repetidos a apesar de no manadar un error

//* Para saber el tamaño de un set

console.log(set.size);

// Para agregar valores

set.add(5);
console.log(set);

// Para recorrer los indices

for( index of set) {
    console.log(index);
}

// Tambien se puede utilizar 
console.log('Recorriendo Set x2')
set.forEach( index => console.log(index));


console.log("Recorriendo Set x2");

// Para recorrer su longitud o acceder una posicion necesitamos convertirlo en Array

let arrn = Array.from(set);
console.log(arrn);
console.log(arrn.length);

// Tambien podemos eliminar elementos de manera facil con delete

set.delete(5);
console.log(set);

// Comprobar si un valor existe

console.log(set.has(5));
