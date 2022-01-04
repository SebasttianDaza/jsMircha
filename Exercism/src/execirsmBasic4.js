/**
 * ?. 12. Prograna una funcion que determine si un numero es primo
 * 
 * ? 13.Programa una funcion que determine si un numero es par o impar
 * 
 * ? 14. Programa una funcion para convertir grados celcius a farhenheit e viceversa
 */

const numberPrimo = (n = number) => {
    if ( n == 0 || n == 1 || n == 4 ) {
        console.info('No es primo');
    }
    for (let x = 2; x < n; x++) {
        if ( n % x === 0 ) {
            console.info('No es primo');
            break;
        } 
    }
    return console.info('Es primo');
}

numberPrimo(7);
numberPrimo(8);

//* 13

function parImpar (n = number) {
    ( n % 2 == 0 ) ? console.info('Es par') : console.info('Es impar');
}

parImpar(5);
parImpar(6);
parImpar(7); 


//* 14

function grados( n = number, g) {
    if ( n === 0) {console.info('No ingreso un numero valido')}
    else {
        if (g === "c") {
          return (n * 9) / 5 + 32;
        }
        if (g === "f") {
          return ((n - 32) * 5) / 9;
        }
    }
    
}

console.log(grados(32, "c"));
grados(0, "c");