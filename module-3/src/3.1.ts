// exam-1: simple class
// class Animal {
//     // property
//     name: string;
//     species: string;
//     sound: string;

//     // constructor
//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound
//     }
//     // anonymous function---> method
//     makeSound(){
//         console.log(`The ${this.name} says ${this.sound}`)
//     }

// };

// // constant
// const dog = new Animal("German Shepard", "Dog", "Gew Gew")
// const cat = new Animal("Persian", "Cat", "Maw Maw")

// //call 
// cat.makeSound()
// dog.makeSound()


// exam-2: modify --> parameter properties
class Animal {
    //    public name: string;
    // public species: string;
    //    public sound: string;

    // constructor
    // parameter properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound
    }
    // anonymous function---> method
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }

};

// constant(instance)
const dog = new Animal("German Shepard", "Dog", "Gew Gew")
const cat = new Animal("Persian", "Cat", "Maw Maw")

//call 
cat.makeSound()
dog.makeSound()