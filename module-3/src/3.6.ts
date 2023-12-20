{
    // 3-6: Getter and setter
    // // Example-1
    // // parent
    // class BankAccount {
    //     public readonly id: number;
    //     public readonly name: string;
    //     // private _balance: number
    //     protected _balance: number

    //     // constructor
    //     constructor(id: number, name: string, balance: number) {
    //         this.id = id,
    //             this.name = name,
    //             this._balance = balance
    //     };
    //     // //     method 
    //     //    public addDeposit(amount: number) {
    //     //         this._balance = this._balance + amount
    //     //     };

    //     // setter -- method
    //     set deposit(amount: number) {
    //         this._balance = this._balance + amount
    //     }


    //     // for getting Balance
    //     //    public getBalance() {
    //     //         return this._balance
    //     //     }

    //     // getter--method
    //     get balance() {
    //         return this._balance
    //     };
    // };

    // // Child-1
    // class StudentAccount extends BankAccount {
    //     // test(){
    //     //     this.
    //     // }
    // };


    // // instance
    // const gribManushArAccount = new BankAccount(111, "Mr. Grorib", 60)

    // // call addDeposit
    // // gribManushArAccount.addDeposit(20)  //function call korte hoscee
    // gribManushArAccount.deposit = 20 //setter use kore property ar moto pascii

    // // const myBalance = gribManushArAccount.getBalance(); //function call korte hoscee

    // const myBalance = gribManushArAccount.balance;  //getter use kore property ar moto pascii
    // console.log(myBalance);


    // Example-2 ; clear code
    // parent
    class BankAccount {
        public readonly id: number;
        public readonly name: string;
        protected _balance: number

        // constructor
        constructor(id: number, name: string, balance: number) {
            this.id = id,
                this.name = name,
                this._balance = balance
        };

        // setter -- method
        set deposit(amount: number) {
            this._balance = this._balance + amount
        }


        // for getting Balance

        // getter--method
        get balance() {
            return this._balance
        };
    };

    // Child-1
    class StudentAccount extends BankAccount {
        // test(){
        //     this.
        // }
    };


    // instance
    const gribManushArAccount = new BankAccount(111, "Mr. Grorib", 60)

    // call addDeposit
    gribManushArAccount.deposit = 20
    // get balance
    const myBalance = gribManushArAccount.balance;
    console.log(myBalance);











    // 
}