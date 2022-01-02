function promise(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value != "number") {
        reject("Un nuevo error");
      }
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 100));
  });
}

async function awaitAsync() {
  try {

    console.log('Hola mundo');
    
    console.log("Inicio de async");

    let obj = await promise(0);
    console.log(`Primer ${obj.value} y ${obj.result}`);

    obj = await promise(1);
    console.log(`Segundo ${obj.value} y ${obj.result}`);



  } catch (err) {
    console.error(err);
  }
}

awaitAsync();
