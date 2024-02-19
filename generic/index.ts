// Menggunakan Generic dari pada any
function identifyOne<Type>(data: Type): Type{
    return data
}

// Bisa menggunakan coustume type data
function identifyTwo<Maman>(data: Maman): Maman{
    return data
}

// Dan bisa juga menggunakan interface
function identifyThree<Maman>(data: Maman): Maman{
    return data
}

interface User{
    name:string
}
// identifyThree<User>({})

// Menggunakan generic pada arrow function
const getData = <T,> (data: T): T => {
    return data
}



// Menggunakan 2 type input
function identifyFour<T, U>(data1: T, data2: U): object{
    return{
        data1,
        data2
    }
}

// Menggunakan 2 type input tetapi references ke type data lain
function identifyFive<T, U extends Number>(data1: T, data2: U): object{
    return{
        data1,
        data2
    }
}

// Menggunakan generic pada class
class Users<T>{
    public hobby: T[] = []

    addHobby(product: T){
        this.hobby.push(product)
    }
}