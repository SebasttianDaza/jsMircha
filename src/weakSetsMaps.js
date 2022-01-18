/** * WeakSets
 * ? Para almacenar valores, se tienen que almacenar uno por uno
 * Solo aceptan  referencia de objetos, es decir, debiles
 */

const ws = new WeakSet();

ws.add({name: 'John'});
//console.log(ws);

let as = { apellido: "Daza" };
ws.add(as);
//Agregar valores
ws.add({apellido: 'Perez'});
ws.add({edad: '15'});
// Verificar valores
//console.log(ws.has(as));

//setInterval(() => {
    //console.log(ws);
//}, 1000);

/**
 * *WeakMaps
 * Objetos mejorados
 * 
 */

const wm = new WeakMap();
let llave = {};
let llave3 = {};
let llave2 = {};

wm.set(llave, 'John');
wm.set(llave2, 'Doe');
wm.set(llave3, 'Smith');

console.log(wm);
// Para obtener los objetos por medio de llaves
console.log(wm.get(llave));
