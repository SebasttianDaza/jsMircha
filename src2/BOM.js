// Evento al cambiar de tamaño la pantalla
window.addEventListener("resize", (e) => {
    console.clear();
    console.log(window.innerWidth); // El ancho que tiene el viewport
    console.log(window.innerHeight); // El alto que tiene el viewport
    console.log(window.outerWidth); // El tamaño total de la pantalla en bajo
    console.log(window.outerHeight); // El tamaño total de la pantalla en alto
    console.log(e);
});


//Evento al hacer scroll
window.addEventListener("scroll", (e) => {
    console.clear();
    console.log(window.scrollX); // El scroll horizontal
    console.log(window.scrollY); // El scroll vertical
    console.log(e);
});

//Evento al cargar la pagina, espera a que se carge todo el contenido
window.addEventListener("load", (e) => {
    console.clear();
    console.log(window.screenX); //Saber la posicion en X de la ventana sobre pantalla
    console.log(window.screenY); //Saber la posicion en Y de la ventana sobre pantalla
    console.log(window.screenLeft); //Saber la posicion izquierda de la ventana sobre pantalla
    console.log(window.screenTop); //Saber la posicion superior de la ventana sobre pantalla
    console.log(window.screen); //Saber la resolucion de la pantalla
    console.log(e);
})


//Evento al cargar la pagina pero al documento, no espera a que se cargue toda la pagina
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("Evento DOMContentLoaded");
    console.log(e);
})


