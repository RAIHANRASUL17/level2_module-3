{
    //3-7 Statics in OOP

    //     // Example-1: normal Counter Class 
    //     class Counter {
    //         count: number = 0;
    //         increment(){
    //            return this.count = this.count + 1;
    //         }
    //         decrement(){
    //            return this.count = this.count - 1;
    //         }

    //     }


    // // instance
    // const instance1 = new Counter()
    // console.log(instance1.increment()); // --->1 different memory
    // console.log(instance1.increment()); // --->1 different memory
    // console.log(instance1.increment()); // --->1 different memory


    // console.log("-----------------")

    // const instance2 = new Counter()
    // console.log(instance2.increment()); // --->1 different memory
    // console.log(instance2.increment()); // --->1 different memory



    // // Example-2: static-1
    // class Counter {
    //     static count: number = 0;
    //     increment() {
    //         return Counter.count = Counter.count + 1;
    //     }
    //     decrement() {
    //         return Counter.count = Counter.count - 1;
    //     }

    // }


    // // instance
    // const instance1 = new Counter()
    // console.log(instance1.increment()); // --->1 different memory
    // // console.log(instance1.increment()); // --->1 different memory
    // // console.log(instance1.increment()); // --->1 different memory


    // console.log("-----------------")

    // const instance2 = new Counter()
    // console.log(instance2.increment()); // --->1 different memory

    // console.log("-----------------")

    // const instance3 = new Counter()
    // console.log(instance3.increment()); // --->1 different memory



    // Example-2: static-2
    class Counter {
        static count: number = 0;
        static increment() {
            return Counter.count = Counter.count + 1;
        }
        static decrement() {
            return Counter.count = Counter.count - 1;
        }

    }


    // instance
    // const instance1 = new Counter()
    // console.log(instance1.increment()); // --->1 different memory

    console.log(Counter.increment()); // --->1 different memory
    



    console.log("-----------------")

    // const instance2 = new Counter()
    console.log(Counter.increment()); // --->1 different memory

    console.log("-----------------")

    // const instance3 = new Counter()
    console.log(Counter.increment()); // --->1 different memory










    // 
}