/** *
 *? insertAdjacent...
 * insertAdjacentElement(position, elemento); Solo elementos
 * insertAdjanceHTML(position, html) es una forma mas eficiente del innerHTML
 * insertAdjanceText(position, text)
 * 
 * * Posiciones:
 * beforebegin = Hermano anterior
 * afterbegin = Primer hijo
 * beforeend = Ultimo hijo
 * afterend = Hermano posterior
 * 
 * 
 */

function hola() {
    const va = document.getElementById("pasro");
    
    va.insertAdjacentElement("beforeend", template());
    
}

function template () {
    const vaso = document.createElement("div");
    const h = document.createElement("h1");
    const t = document.createTextNode("Hola 💻💻");
    h.appendChild(t);
    vaso.appendChild(h);
    return vaso;
}

hola();


function change () {
    const a = document.querySelector("a");
    let template = `
    <div><h1>Hola</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
    `

    a.insertAdjacentHTML("beforebegin", template);
}

change();


// Metods de JQuery en JavaScript Nativo

prepend(); // Como primer hijo
before(); // Antes de un elemento
after(); // Despues de un elemento
append(); // Como ultimo hijo
