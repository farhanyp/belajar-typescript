// Interface
// Usage Interface
interface User {
    readonly id: string,
    name: string,
    getActions: () => string
}

interface Admin extends User {
    readonly role: string
}

const Farhan: User = {
    id : "123",
    name: "farhan",
    getActions: () => {
        return "lari"
    }
}

const Yp: Admin = {
    id : "123",
    name: "farhan",
    getActions: () => {
        return "lari"
    },
    role: "admin"
}

export{}
