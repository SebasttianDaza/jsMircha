/*const div = document.querySelectorAll('#preven div');
div.forEach( item => {
    item.addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        console.log(
          `Hola soy ${item.className} y inicio ${e.target.className} `
        );

      }
    );
})
*/


const a = document.querySelector('#preven div a');

/*a.addEventListener("click", (e) => {
  alert(`Hola soy ${e.className} y inicio ${e.target.className} `);
  e.preventDefault();
  e.stopPropagation();
});
*/

// Delegacion de eventos

document.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("#preven div a")) {
      alert(`Hola soy ${e.target.className} y inicio ${e.target.className} `);
      e.preventDefault();
    }

    if(e.target.matches("#preven div")){
      console.log(`Hola soy ${e.target.className} y inicio ${e.target.className} `);

    }
})