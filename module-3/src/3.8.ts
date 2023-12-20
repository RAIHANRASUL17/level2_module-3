{
    //3-8 Polymorphism
    // Example-1: simple

    // parent
    class Person {
        // method
        getSleep() {
            console.log(`I am sleeping  8 hours per day`)
        }
    };

    // child-1
    class Student extends Person {
        // method--> re create
        getSleep() {
            console.log(`I am sleeping  7 hours per day`)
        }
    };

    // child-2
    class Developer extends Person {
        // method--> re create
        getSleep() {
            console.log(`I am sleeping  6 hours per day`)
        }
    };


    // arrow function---> for Parent Class
    const getSleepHours = (param: Person) => {
        return param.getSleep()
    };

    // instance
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();


    // call getSleepHours
    getSleepHours(person1)
    getSleepHours(person2)
    getSleepHours(person3)


    // Example-2:
    // parent
    class Shape {
        // method
        getArea(): number {
            return 0
        }
    };
    // child-1
    // pi*r*r

    class Circle extends Shape {
        // property
        radius: number;
        // constructor
        constructor(radius: number) {
            super()
            this.radius = radius
        }
        // method--recreate
        getArea(): number {
            // formula
            return Math.PI * this.radius * this.radius
        };
    };


    // child-2
    // height*width

    class Rectangle extends Shape {
        // property
        height: number;
        width: number;
        // constructor
        constructor(height: number, width: number) {
            super()
            this.height = height
            this.width = width
        }
        // method--recreate
        getArea(): number {
            // formula
            return this.height * this.width
        }
    };


    // arrow function---> for Parent Class
    const getShapeArea = (param: Shape) => {
        // return param.getArea()
        console.log(param.getArea())
    };
    // instance
    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Rectangle(10, 20)

    // call getShapeArea
    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)










    // 
}