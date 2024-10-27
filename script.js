class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log("The animal makes a sound");
    }
}

class Cat extends Animal {
    constructor() {
        super("Cat");
    }

    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
    constructor() {
        super("Dog");
    }

    bark() {
        console.log("woof");
    }
}

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const myCat = new Cat();
console.log(myCat.species); 
myCat.makeSound(); 
myCat.purr(); 

const myDog = new Dog();
console.log(myDog.species); 
myDog.makeSound(); 
myDog.bark(); 
