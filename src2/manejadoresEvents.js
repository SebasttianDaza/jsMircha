const title = document.querySelector('h1');

title.addEventListener('click', () =>  {
    console.log('Click en el titulo');
    console.log(event);
})


/* Flujo de Eventos */

title.addEventListener('click', para, {
    capture: true, //buble
    once: true,
    passive: true
})