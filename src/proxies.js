/**
 * *Proxies
 */

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
}

// Sirve para hacer funciones o metodos que nos permitan manejar de una manera u otra el proxy y el objeto original
const manejador = {
    //Podemos validar varias cosas
    set(obj, prop, valor) {
        if(Object.keys(obj).indexOf(prop) === -1) {
            console.warn(`Propiedad ${prop} no existe`)
        }
        obj[prop] = valor;
    }
}

const proxy = new Proxy(persona, manejador);
console.log(proxy.nombre);
proxy.nombre = 'Pedro';
console.log(proxy.nombre);
console.log(persona.nombre);

proxy.insta = "emprende";
