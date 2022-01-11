const json = {
  cadena: "Jon",
  edad: 23,
  estatura: 1.70,
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  object: {
    nombre: "Jon",
    apellido: "Lopez",
    edad: 23,
    estatura: 1.75,
  },
};

console.log(JSON);
// Convierte un Json a un objeto
console.log(JSON.parse('{"cadena":"Jon","edad":23,"estatura":1.70,"array":[1,2,3,4,5,6,7,8,9,10],"object":{"nombre":"Jon","apellido":"Lopez","edad":23,"estatura":1.75}}'));

// Convierte un objeto a un Json
console.log(JSON.stringify(json));