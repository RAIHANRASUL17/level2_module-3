{
    // 3-10: Encapsulation in OOP

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
        private getBalance() {
            return this._balance
        }
        // new method 
        getHiddenMethod() {
            return this.getBalance()
        }

    };




    // Child-1
    // class StudentAccount extends BankAccount {
    //     test(){
    //         this.
    //     }
    // };


    // instance
    const gribManushArAccount = new BankAccount(111, "Mr. Grorib", 20)
    // gribManushArAccount.balance = 0

    // call addDeposit
    gribManushArAccount.addDeposit(440)

    const myBalance = gribManushArAccount.getHiddenMethod();
    console.log(myBalance)






    // 
}