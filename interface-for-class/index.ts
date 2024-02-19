interface User {
    name: string
    age: number
}

interface Fashion {
    cloths: string
}

class Users implements User{
    constructor(
        public name: string,
        public age: number
    ){}
}

class Users2 implements User, Fashion{
    constructor(
        public name: string,
        public age: number,
        public cloths: string
    ){}
}