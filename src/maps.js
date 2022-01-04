// Crear un Map

let map = new Map();

// Para insertar elementos

map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');


console.log(map);
// Para saber cuantos elementos hay
console.log(map.size);

// Para verificar un elementos
console.log(map.has('name'));

// Para solo llamar una llave
console.log(map.get('name'));

// Eliminar una llave
map.delete('name');

console.log(map);

// Para recorrer el map

for ( let [key, value] of map) {
    console.info(`${key} => ${value}`);
}