// *Prototipos

const person = {
    name: 'Sebastian',
    sonar() {
        console.log('Sonar');
    }
}

// Generar un prototype sin escribir muchos codigo
// *Funcion constructora

function Animal(name, age, lastname) {
    // Atributos
    this.name = name;
    this.age = age;
    this.lastname = lastname;
    // Metodos

    /* this.sonar = function() {
        return name + ' ' + lastname + ' ' + age;
    } */
}

//*Asignamos metodos al prototype de la funcion constructora
Animal.prototype.sonar = function() {
    return this.name + ' ' + this.lastname + ' ' + this.age;
}


// Intancias de prototype

const primerAnimal = new Animal('Sebastian', '23', 'Garcia'),
    lola = new Animal('Lola', '2', 'Garcia');


///

console.log(primerAnimal.sonar());
console.log(lola);

//* Herencia Prototipos

function Perro(name, age, lastname, color) {
    // Poner como padre a Aninmal
    this.super = Animal;
    // Llamar al constructor de Animal
    this.super(name, age, lastname);
    this.color = color;
}

// Pero es mejor la herencia al prototype

Perro.prototype = new Animal();
//Nos tremos todos los metodo de la clase Animal
Perro.prototype.constructor = Perro;


Perro.prototype.ladrar = function() {
    return 'Guau Guau';
}

const hijoHijo = new Perro('Harold', '23', 'Garcia', 'Blanco');
console.log(hijoHijo);
console.log(hijoHijo.ladrar());
console.log(hijoHijo.sonar());