// **Las funciones alert(), prompt(), confirm() son funciones que desprenden del window

console.log(window);
//* Recibir una alerta

//window.alert("Hola Mundo");

//* Recibir una confirmacion

//window.confirm("Desea continuar?");

//* Recibir informacion

//window.prompt("Ingrese su nombre");

let alerta = window.alert("Hola Mundo"),
    confirmacion = window.confirm("Desea continuar?"),
    informacion = window.prompt("Ingrese su nombre");
console.log(alerta, confirmacion, informacion);

//*Expresiones regulares




//*Funciones anonima o funciones autoinvocaibles
let valor = informacion;
(function (informacion){
    document.querySelector('h1').innerHTML = informacion;
})();

//La corckford

((function (informacion){
    console.log(informacion);
})(informacion));

//Unaria

+function (){
    console.log('Hola mundo de JS')
}();

//facebookk
!function (){
    console.log('Hola mundo de JS2')
}();

