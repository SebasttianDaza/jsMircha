/**
 * ?9. Programa una funcion que obtenga un elemento aleotario entre 501 y 601
 * 
 * ?10. Programa una funcion que reciba un numero y evalue si es canpicua
 * 
 * ?11. Programa una funcion que calcule el factorial de un numero
 */

//*9

function numberAler() {
    //Math.floor devuelve un numero entero
    // Math.random devuelve un numero aleatorio entre 0 y 1
    return Math.floor( Math.random() * (600 - 501) + 501);
}

console.log(numberAler());

// * 10

function numberCapicua (n = number) {
    let pr2 = n.toString().split('').reverse().join('');
    // Convertir a numero
    let pr3 = parseInt(pr2);

    ( n === pr3 ) ? console.info('Es capicua') : console.info('No es capicua');
}

numberCapicua(2002);

// * 11

function factorial(n = number) {
    //Inicia desde numero1
    let fact = 1;
    // Si i es menor o igual a n
    for (let i = 1; i <= n; i++) {
        // Multiples fact * i hasta que llegue a 5
        fact =  fact * i;
    }
    console.log(fact);
}

factorial(5);