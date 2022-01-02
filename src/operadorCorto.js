//* Cortocircuito OR ||
function saludar(nombre) {
    nombre = nombre || 'Desconocido';
    console.log(`Hola ${nombre}`);
}

saludar();
saludar('Juan');

//* Cortocircuito AND &&

function saludar2(nombre) {
    nombre = nombre && 'Desconocido';
    console.log(`Hola ${nombre}`);
}

saludar2();
saludar2('Juan');