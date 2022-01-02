//*Primer nivel
/*
1.Crear una funcion que cuente el numero de cararcteres de una cadena
*/

const title = document.querySelector('h1');
title.addEventListener( 'click', () => {
    let cadenaTexto = prompt('¿Cual es tu cadena de texto?');
    contadorCar(cadenaTexto)
})

const contadorCar = (car) => {
    //Buscamos una concidencia, el espacio en blanco, y lo remmplazamos
    let arr = car.replace(/ /g, '');
    //Ahora buscamos el numero de caracteres
    let pr = arr.length;
    //Damos respuesta del numerp de caracteres
    alert(`La cadena de texto tiene ${pr} caracteres`);
  
}


// a. Recibir una cadena de texto y devolver el numero de caracteres, pero en formato de array
const title2 = document.querySelector('h2');
title2.addEventListener( 'click', () => {
    let cadenaTexto = prompt('¿Cual es tu cadena de texto?');
    contadorCar2(cadenaTexto);
})


const contadorCar2 = (car) => {
    //Buscamos una concidencia, el espacio en blanco, y lo remmplazamos
    let arr = car.split(' ');

    let pr = []
    
    arr.forEach(element => {
        getZona(element);
    })

    const alertas = `
        Primera: ${pr[0]},
        Segunda: ${pr[1]},
        Tercera: ${pr[2]},
        Cuarta: ${pr[3]},
        Quinta: ${pr[4]},
        Sexta: ${pr[5]},
        Septima: ${pr[6]},
    
    `

    function getZona(element) {
        pr.push(element.length);
        
    }

    alert(alertas);
}

/*
2. Programa una funcion que devuelva el texto recortado segun el numero de caracteres indicado
*/

const title3 = document.querySelector('h3');
title3.addEventListener( 'click', () => {
    let cadenaTexto = prompt('¿Cual es tu cadena de texto?');
    contadorCar3(cadenaTexto);
})


function contadorCar3(cadenaTexto) {
    //Preguntamos cuantos caracteres queremos
    let numbers = prompt('Numero de caracteres a devolver?');
    //Renplazar los espacios en blanco
    let pr2 = cadenaTexto.replace(/ /g, '');
    console.log(pr2);
    //Obtenemos los caracteres segun si indice
    let arr1 = pr2.substring(0, numbers);
    console.log(arr1);
}

/*
3. Funcion que reciba un string y devuelva un array con las palabras
*/

const title4 = document.querySelector('h4');
title4.addEventListener( 'click', () => {
    let cadenaTexto = prompt('¿Cual es tu cadena de texto?');
    contadorCar4(cadenaTexto);
});


function contadorCar4(cadenaTexto) {
    //Preguntamos cuantos caracteres queremos
    let numbers = prompt('¿Separado por letras o palabras?');
    //Si la respuesta es letras
    if(numbers == 'letras'){
        //Renplazar los espacios en blanco
        let sinSpaces = cadenaTexto.replace(/ /g, '');
        //Creamos un array divido por letras
        let valor = sinSpaces.split('');
        alert(valor);

        console.log(valor);

    } //Si la respuesta es palabras 
    else if (numbers == 'palabras'){
        //Creamos un array divido por palabras
        let valor = cadenaTexto.split(' ');
        alert(valor);
    } else {
        alert('No has seleccionado ninguna opcion');
    }
}

/**
 * 4. Funcion que reciba un string y repita las veces indicadas
 */


const title5 = document.querySelector('h5');
title5.addEventListener( 'click', () => {
    let cadenaTexto = prompt('¿Cual es tu cadena de texto?');
    contadorCar5(cadenaTexto);
})

function contadorCar5(cadenaTexto) {
    //Preguntamos cuantos caracteres queremos
    let numbers = prompt('¿Cuantas veces quieres repetir la cadena?');
    //Creamos un array divido por letras
    let space = cadenaTexto + ',  ';
    let valor = space.repeat(numbers);
    alert(valor);
} 


