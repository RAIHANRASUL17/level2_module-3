{
    //Type guard using typeof & in

    // //Example-1: typeof(type of run time a use hoi)-----> type guard 

    // const add = (param1: string | number, param2: string | number): string | number => {
    //     if (typeof param1 === "number" && typeof param2 === "number") {
    //         return (param1 + param2)
    //     } else {
    //         return (param1.toString() + param2.toString())
    //     }
    // };


    // //Example-1: modify example 1

    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return (param1 + param2)
        } else {
            return (param1.toString() + param2.toString())
        }
    };
    // call add
    const result1 = add(2, "2")
    // console.log(result1)

    // Example-2: In Guard
    type NormalUser = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`I am ${user.name} and my role is ${user.role}`)
        } else {
            console.log(`I am ${user.name}`)
        }
    };

    const normalUser: NormalUser = {
        name: "Mr. Normal Bro"
    }
    const adminUser: AdminUser = {
        name: "Mr. Admin Bro",
        role: "admin"
    }
    // call getUser
    // getUser(normalUser)
    getUser(adminUser)











    // 
}