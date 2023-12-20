{
    //3-9 Abstraction in OOP
    // Example-1: interface abstraction
    // idea
    interface Vehicle1 {
        // method
        startEngine(): void;
        stopEngine(): void;
        moveEngine(): void
    };

    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting car Engine`)
        }
        stopEngine(): void {
            console.log(`I am stopping the car Engine`)
        }
        moveEngine(): void {
            console.log(`The car is moving`)
        }
        // test method
        test() {
            console.log("I testing here extra method is working or not")
        }
    };

    // instance
    const toyotaCar = new Car1()
    toyotaCar.startEngine()



    // Example-2: abstract class---> leader class
    // idea
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract moveEngine(): void
        // test method
        test() {
            console.log("I testing here extra method is working or not")
        }
    };

    // child class
    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`start engine`)
        }
        stopEngine(): void {
            console.log(`stop engine`)
        }
        moveEngine(): void {
            console.log(`move engine`)
        }
    }
    // // instance [ait ta kano kaje lagloo na]
    // const hondaCar = new Car2();
    // hondaCar.startEngine()













    // 
}