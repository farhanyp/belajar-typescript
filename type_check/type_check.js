"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Check type data
// number
var number = 10;
// tidak bisa input string karena sudah dideklarasi number
// number = "a"
// atau bisa tanpa deklarasikan type datanya
var angka = 2;
// angka = "a"
// Berlaku untuk semua type data
// cek function
// Function yang berparameter angka
function thisIsNumber(number) {
    return "Ini angka";
}
// Tidak bisa input selain number untuk parameternya
// Function yang mengembalikan angka
function thisIsAngka(number) {
    return number;
}
// Object
// Function yang harus berparameter object tertentu
function createUser(_a) {
    var string = _a.name, number = _a.age;
}
createUser({ name: "farhan", age: 12 });
// Function yang return harus object tertentu
function createLogin(name) {
    return {
        name: "farhan",
        age: 12
    };
}
