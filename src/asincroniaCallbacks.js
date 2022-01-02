//*Function Callback

function Callback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 100));
}

Callback(0, (value, result) => {
  console.info("Iniciando Callback");
  console.info(`El valor es ${value} y ${result}`);
  //*Funcion anidada
  Callback(1, (value, result) => {
    console.info("Iniciando Anidacion Callback");
    console.info(`El valor es ${value} y ${result}`);
    //*Funcion anidada
    Callback(2, (value, result) => {
      console.info("Iniciando Anidacion Callback");
      console.info(`El valor es ${value} y ${result}`);
      //*Funcion anidada
      Callback(3, (value, result) => {
        console.info("Iniciando Anidacion Callback");
        console.info(`El valor es ${value} y ${result}`);
      });
    });
  });
});
