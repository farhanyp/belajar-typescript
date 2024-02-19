// Check type data
// number
let number:number = 10
// tidak bisa input string karena sudah dideklarasi number
// number = "a"
// atau bisa tanpa deklarasikan type datanya
let angka = 2
// angka = "a"

// Berlaku untuk semua type data

// cek function
// Function yang berparameter angka
function thisIsNumber(number:number){
    return"Ini angka"
}
// Tidak bisa input selain number untuk parameternya

// Function yang mengembalikan angka
function thisIsAngka(number:number):number{
    return number
}

// Object

// Function yang harus berparameter object tertentu
function createUser({name: string, age: number}){}
createUser({name:"farhan", age: 12})

// Function yang return harus object tertentu
function createLogin(name:string):{name: string, age: number}{
    return {
        name: "farhan",
        age: 12
    }
}

export{}