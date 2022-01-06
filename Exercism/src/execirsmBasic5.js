/**
 * 
 * 15) Programa una función para convertir números de base binaria a   *  decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. 
 * 
 * 16) Programa una función que devuelva el monto final después de      aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 * 
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 * 
 * 

 */

//* 15

const biDecimal = (num, base) => {
    if (num === undefined && typeof num !== 'number') {
        console.warn('El numero no es un numero o se encuentra vacio');
    }
    if (base === undefined && typeof base !== 'number') {
        console.warn('La base no es un numero o se encuentra vacio');
    }
    if (base === 2) {
        return console.info(`${num} en base ${base} es ${num.toString(2)}`);
    }
}

//* 17

const descont = (valor, descuento) => {
    if (typeof valor !== 'number') { console.warn('El valor no es un numero') }
    if (typeof descuento !== 'number') { console.warn('El descuento no es un numero') }

    let descuentos = (valor * descuento) / 100; 

    return console.info(`El descuento es ${valor - descuentos} con un descuento de ${descuento}%`);
}

descont(1000, 20);
descont(1000000, 5);


//* 18

function date(year, month, day) {
    
    
}

date(2010, 10, 10);


