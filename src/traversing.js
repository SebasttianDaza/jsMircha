const rr = document.querySelector('ul');

// Para tener los hijos

console.log(rr.children);

// Para retornar el elemento padre

console.log(rr.parentElement);

//Primer hijo

console.log(rr.firstElementChild);
console.log(rr.firstChild);

// Para obtener el elemento anterior
console.log(rr.previousElementSibling);
console.log(rr.nextElementSibling);

// Metodo que busca el ancestro mas cercano

console.log(rr.closest('body'));