//* Objecto console

console.log(console); //* Registro que ha pasado en nuestra aplicacion
console.error('Esto es un error'); //*Error
console.warn('Esto es una advertencia'); //*Advertencia
console.info('Esto es una informacion'); //*informacion

let nombre = 'Juan';
let apellido = 'Perez';

console.log(nombre, apellido); //Tambien se puede poner en una linea

console.log(`Hola ${nombre} ${apellido}`); // Template String
console.table({nombre, apellido}); //* Muestra una tabla con los datos

// console.clear(); //* Limpia la consola

console.log(window); //* Muestra todo el objeto window, representa la ventana del navegador
console.log(document); //* Muestra todo el objeto document, representa el documento HTML

//* Muestra el valor como un objeto
console.dir(document); //* Muestra todo el objeto document pero con lo metodos

//*Realizar un grupo en la console
console.group('Primer grupo');
console.log('Curso de JS');
console.log('Curso de Node.js');
console.groupEnd('Primer grupo'); //para cerrar el grupo


console.groupCollapsed('Segundo grupo'); // Un grupo colapsado
console.log('Curso de JS');
console.log('Curso de Node.js');
console.groupEnd('Segundo grupo'); //para cerrar el grupo


//* Mostrar una imagen en la consola
console.log(`%cHola mundo`, 'color:red; font-size:50px;'); //* Se puede poner una imagen en la consola

// * Para saber cuanto tiempo tarda en ejecutarse mi codigo

console.time('Contador'); //* Contador de tiempo

const arr = new Array(1000000);
arr.forEach((index) => {
    indexo = index;
});

console.timeEnd('Contador'); //* Para detener el contador de tiempo


//* Hacer test con console

let edad = 28;
let edad2 = 20;

pruebaXYZ = 'Hola';

console.assert(edad< edad2, pruebaXYZ); //* Si la edad es menor que la edad2