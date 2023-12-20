{
    // 3-5: Access modifiers
    // // Example-1: 
    // class BankAccount {
    //     public readonly id: number;
    //     public readonly name: string;
    //     private balance: number

    //     // constructor
    //     constructor(id: number, name: string, balance: number) {
    //         this.id = id,
    //             this.name = name,
    //             this.balance = balance
    //     };
    //     // method 
    //     addDeposit(amount: number) {
    //         this.balance = this.balance + amount
    //     };
    //     // for getting Balance
    //     getBalance() {
    //         return this.balance
    //     }
    // };

    // // instance
    // const gribManushArAccount = new BankAccount(111, "Mr. Grorib", 20)
    // // gribManushArAccount.balance = 0

    // // call addDeposit
    // gribManushArAccount.addDeposit(0)

    // const myBalance = gribManushArAccount.getBalance();
    // console.log(myBalance)


    // // Example-2: to use private convention
    // class BankAccount {
    //     public readonly id: number;
    //     public readonly name: string;
    //     private _balance: number

    //     // constructor
    //     constructor(id: number, name: string, balance: number) {
    //         this.id = id,
    //             this.name = name,
    //             this._balance = balance
    //     };
    //     // method 
    //     addDeposit(amount: number) {
    //         this._balance = this._balance + amount
    //     };
    //     // for getting Balance
    //     getBalance() {
    //         return this._balance
    //     }
    // }

    // // instance
    // const gribManushArAccount = new BankAccount(111, "Mr. Grorib", 20)
    // // gribManushArAccount.balance = 0

    // // call addDeposit
    // gribManushArAccount.addDeposit(20)

    // const myBalance = gribManushArAccount.getBalance();
    // console.log(myBalance)


    // Example-3: apply in protected and add child class
    // parent
    class BankAccount {
        public readonly id: number;
        public readonly name: string;
        // private _balance: number
        protected _balance: number

        // constructor
        constructor(id: number, name: string, balance: number) {
            this.id = id,
                this.name = name,
                this._balance = balance
        };
        // method 
       public addDeposit(amount: number) {
            this._balance = this._balance + amount
        };
        // for getting Balance
       public getBalance() {
            return this._balance
        }
    };

    // Child-1
    class StudentAccount extends BankAccount {
        // test(){
        //     this.
        // }
    };
    

    // instance
    const gribManushArAccount = new BankAccount(111, "Mr. Grorib", 20)
    // gribManushArAccount.balance = 0

    // call addDeposit
    gribManushArAccount.addDeposit(20)

    const myBalance = gribManushArAccount.getBalance();
    console.log(myBalance)










    // 
}