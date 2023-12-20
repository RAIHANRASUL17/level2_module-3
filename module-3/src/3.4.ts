{
    // 3-4: Type guard using instance of

    //Example-1: Instanceof guard 
    // parent class
    class Animal {
        name: string;
        species: string;

        // constructor
        constructor(name: string, species: string) {
            this.name = name,
                this.species = species
        }
        // method for every animal
        makeSound() {
            console.log("I am making sound")
        }
    };

    // child class_1
    class Dog extends Animal {
        // constructor
        constructor(name: string, species: string) {
            super(name, species)
        }
        // method for only Dog
        makeBark() {
            console.log("I am Barking-->")
        }
    };
    // child class_2
    class Cat extends Animal {
        // constructor
        constructor(name: string, species: string) {
            super(name, species)
        }
        // method for only Dog
        makeMeaw() {
            console.log("I am Maewing-->")
        }
    };

    // arrow function for Animal(Parent)---> instanceof guard
    const getAnimal = (animal: Animal) => {
        if (animal instanceof Dog) {
            animal.makeBark()
        }
        else if (animal instanceof Cat) {
            animal.makeMeaw()
        }
        else {
            animal.makeSound()
        }

    }

    // instant
    // constant(instant)
    const dog = new Dog("Dog-->", "dog")
    const cat = new Cat("Cat-->", "cat")

    // call getAnimal
    getAnimal(dog)
    getAnimal(cat)


    // // Example 2;
    // // Instanceof guard
    // // parent class
    // class Animal {
    //     name: string;
    //     species: string;

    //     // constructor
    //     constructor(name: string, species: string) {
    //         this.name = name,
    //             this.species = species
    //     }
    //     // method for every animal
    //     makeSound() {
    //         console.log("I am making sound")
    //     }
    // };

    // // child class_1
    // class Dog extends Animal {
    //     // constructor
    //     constructor(name: string, species: string) {
    //         super(name, species)
    //     }
    //     // method for only Dog
    //     makeBark() {
    //         console.log("I am Barking-->")
    //     }
    // };
    // // child class_2
    // class Cat extends Animal {
    //     // constructor
    //     constructor(name: string, species: string) {
    //         super(name, species)
    //     }
    //     // method for only Dog
    //     makeMeaw() {
    //         console.log("I am Maewing-->")
    //     }
    // };

    // // arrow function for Animal(Parent)---> instanceof guard
    // // smart way tay use kortay function babohar kortay pari
    // const isDog = (animal: Animal): animal is Dog => {
    //     return animal instanceof Dog
    // }
    // const isCat = (animal: Animal): animal is Cat => {
    //     return animal instanceof Cat
    // }

    // const getAnimal = (animal: Animal) => {
    //     if (isDog(animal)) {
    //         animal.makeBark()
    //     }
    //     else if (isCat(animal)) {
    //         animal.makeMeaw()
    //     }
    //     else {
    //         animal.makeSound()
    //     }

    // }

    // // instant
    // // constant(instant)
    // const dog = new Dog("Dog-->", "dog")
    // const cat = new Cat("Cat-->", "cat")

    // // call getAnimal
    // getAnimal(dog)
    // // getAnimal(cat)


















    // 
}