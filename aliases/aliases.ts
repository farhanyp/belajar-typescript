// Menggunakan Aliases
type User = {
    name: string,
    age: number 
}
// Menggunakan type data aliases sebagai parameter
function createUser(user:User){}
// Menggunakan type data aliases sebagai return
function createUser2(user:User): User{
    return {
        name: "",
        age:0
    }
}


// Menggunakan Aliases dan Readonly
type UserDB = {
    readonly id:string,
    name: string,
    age: number 
}

let user1:UserDB = {
    id: "123",
    name: "farhan",
    age: 0
}

user1.name = "Yp"
// Tidak bisa mengubah id karena readonly
// user1.id = "Yp"


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

// Menggabungkan aliases
type cardDetail = cardNumber & cardDate & {
    cc: string
}

export{}