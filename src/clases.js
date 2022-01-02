// *Clases en JS

class Animal {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    sayHello() {
        console.log(`Hola, soy ${this.name} ${this.lastname}`);
    }
}

const nuevoAnimal = new Animal('Juan', 'Perez');
console.log(nuevoAnimal);
nuevoAnimal.sayHello();

//* Herencia    

class Persona extends Animal {
    constructor(name, lastname, age) {
        super(name, lastname);
        this.age = age;
    }
    
    //* Metodos Get y Set
    get getAge() {
        return this.age;
    }

    set setAge(age) {
        this.age = age;
    }

    //

    sayHello() {
        console.log(`Hola, soy ${this.name} ${this.lastname} ,un gusto`);
    }

    sayPersona() {
        return `Hola, soy ${this.name} ${this.lastname} y tengo ${this.age} años`;
    }
}

const nuevoPersona = new Persona('Juan', 'Perez', '30');
console.log(nuevoPersona);
nuevoPersona.sayHello();

// Mostramos el metodo get y set
console.log(nuevoPersona.getAge);
nuevoPersona.setAge = '40';
console.log(nuevoPersona.getAge);


