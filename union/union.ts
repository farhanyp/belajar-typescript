// Union
// Union in variabel
let thisIsNumberAndString: number | string = 1
thisIsNumberAndString = "dua"

// Union in parameter and return functions
function changeNumberAndString(data: number | string): number | string {
    if(typeof data === "number"){
        return 1
    }else{
        return "2"
    }
}

// Union in array with aliases
type User = {}
const thisIsNumberAndUser: (User | number | string)[] = [1,2, "3"] 

// explicit define value
let superhero : "Iron-man" | "captain" 
superhero = "Iron-man"
superhero = "captain"

export{}
