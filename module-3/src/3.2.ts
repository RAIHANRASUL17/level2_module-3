// Inheritance in OOP
// example-1

// class Student {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string){
//         this.name = name,
//         this.age = age,
//         this.address= address
//     }
//     // method
//     getSleep(numOfHour: number){
//         console.log(`${this.name} will sleep for ${numOfHour}`)
//     }

// };

// // constant
// const student1 = new Student("Mr.student", 20, "Bangladesh");

// class Teacher {
//     name: string;
//     age: number;
//     address: string;
//     designation: string;

//     constructor(name: string, age: number, address: string, designation: string){
//         this.name = name,
//         this.age = age,
//         this.address= address,
//         this.designation = designation
//     }
//     // method
//     getSleep(numOfHour: number){
//         console.log(`${this.name} will sleep for ${numOfHour}`)
//     }
//     takeClass(numOfClass: number){
//         console.log(`${this.name} will take class ${numOfClass}`)
//     }

// };

// // constant
// const teacher1 = new Teacher ("Mr.teacher", 40, "India", "professor");


// Example-2; Inheritacne with parent

class Parent {
    name: string;
    age: number;
    address: string;
    
    // constructor
    constructor(name: string, age: number, address: string){
        this.name = name,
        this.age = age,
        this.address= address
    }
    // method
    getSleep(numOfHour: number){
        console.log(`${this.name} will sleep for ${numOfHour}`)
    }
};


class Student extends Parent {

    // constructor
    constructor(name: string, age: number, address: string){
        super(name, age, address )
    }
    // method


};

// constant
const student1 = new Student("Mr.student", 20, "Bangladesh");
// call getSleep
// student1.getSleep()


class Teacher extends Parent {
    
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address)
        this.designation = designation
    }
    // method
 
    takeClass(numOfClass: number){
        console.log(`${this.name} will take class ${numOfClass}`)
    }

};

// constant(instant)
const teacher1 = new Teacher ("Mr.teacher", 40, "India", "professor")