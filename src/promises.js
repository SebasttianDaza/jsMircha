//*Promise

function promise(value) {
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value != "number") {
              reject("Un nuevo error");
            }
            resolve({
                value,
                result: value * value
            });
            
        }, 0 | Math.random() * 100);
    });
}


promise(0)
    .then( obj => {
        console.info("Iniciando Promise");
        console.info(`El valor es ${obj.value} y ${obj.result}`);
        return promise(1);
    })
    .then( obj => {
        console.info("Iniciando Anidacion Promise");
        console.info(`El valor es ${obj.value} y ${obj.result}`);
        return promise(2);
    })
    .then( obj => {
        console.info("Iniciando Anidacion Promise");
        console.info(`El valor es ${obj.value} y ${obj.result}`);
        return promise(3);
    })
    .then( obj => {
        console.info("Iniciando Anidacion Promise");
        console.info(`El valor es ${obj.value} y ${obj.result}`);
    })
    .catch( err => {
        console.error(err);
    });