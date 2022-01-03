/**
 * ?5. Crea una funcion que invierta palabras de una cadena de texto
 * 
 * ?6. Programa una funcion para contar el numero de veces que se repite en un texto
 * 
 * ?7. Programac una funcion que valides si una palabra es palidromo
 * 
 * ?8. Programar un patron que elimine cierto patron de una cadena de texto
 * 

 */


//*5

const invertirCadena = (cadena = '') => {
    return cadena.split('').reverse().join('');
}

console.log(invertirCadena('hola'));

//*6

const contarCadena = (cadena = '', a = '') => {
    //Convertir un string a un array con split
    let pr = cadena.split(' ');
    //Iniciar un contador
    let contador = 0;
    //Recorrer el array
    pr.forEach(element => {
        //Si el elemento es igual al parametro
        if (element === a) {
            contador++;
        } else {
            contador = contador;
        }
    });
    //Devolver el contador
        console.info(`El caracter ${a} se repite ${contador} veces`);
}

contarCadena('hola mundo como te encuentras mundo', 'hola');

//*7 

const palindromo = (cadena = '') => {
    // Convertir una cadena e array, invertirla y volver a convertirla
    let pr = cadena.split('').reverse().join('');
    //Si la cadena es igual a la invertida
    console.info( (cadena === pr) ? 'Es palindromo' : 'No es palindromo');
}

palindromo('ana');

//*8

const patters = (cadena = '', a = '') => {
   while(cadena.includes(a)){
       cadena = cadena.replace(a, '');
   }
   return cadena;
}

console.log(patters('xy1 xy2 xy3 xy4', 'xy'));

// Con RegeExp

const removeCharacter = (cadena = '', a = '') => {
    return cadena.replace(new RegExp(a, 'ig'), '');
}

console.log(removeCharacter('xy1 xy2 xy3 xy4', 'xy'));