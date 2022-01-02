//* Object Date()

console.log(Date()); // Para conocer la fecha actual, hora actual y demas

let data = new Date();
console.log(data);

//*Para ver dias del mes
console.log(data.getDate());

//*Para ver el dia de la semana
/*
Lunes: 1
Martes: 2
Miercoles: 3
Jueves: 4
Viernes: 5
Sabado: 6
Domingo: 0
*/
console.log(data.getDay());

//Obtener el mes

console.log(data.getMonth());

//*Obtener el año

console.log(data.getFullYear());
console.log(data.getYear());

//Obtener la hora, segundos, minutos, etc

console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());

//*Para obtener la data completa
console.log(data.toString());
//*Solo fechas
console.log(data.toDateString());
//*Solo fecha
console.log(data.toLocaleDateString());
//*Solo hora
console.log(data.toLocaleTimeString());
//*Para obtener el uso horario
console.log(data.getTimezoneOffset());

//*La fecha entre formato de segundos
console.log(Date.now());


//*Object Math();

console.log(Math);
console.log(Math.PI);

// Valor absoluto de un numero
console.log(Math.abs(-5));

// Para redodndear un numero, para el numero entero mayor
console.log(Math.ceil(5.5));

// Para redondear un numero, para el numero entero menor
console.log(Math.floor(5.5));

// Para redondear un numero, para el numero entero mas cercano
console.log(Math.round(5.5));

//* Para sacar la razi cuadrada de un numero
console.log(Math.sqrt(5.5));

// Para elevar un valor a la potencia de otro

console.log(Math.pow(5,2));


// Para saber si el numero es entero, negativo o positivo
console.log(Math.sign(5));
//Devuelve -1 si es negativo, 0 si es 0, 1 si es positivo

//Me da un valor aleatorio entre un rango
console.log(Math.random());
console.log(Math.random()*1000);


