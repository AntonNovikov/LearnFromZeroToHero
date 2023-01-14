// tsc
// https://www.youtube.com/watch?v=b598TqLzBb4
// npm i -g typescript

// tsc --init

// number string boolean

const hell: string = "Hello World~"
console.log(hell)

function sum(a:number,b:number):number{
    return a + b
}

const numbers: number[] = [1,2,3]
const strings: string[] = ['1',"2","3"]

let any: any = '1'
any=() => 1

//
// function addOne(num: number | string):number {
//     return 1 + Number(num)
// }
type NumberOrString = number | string

function addOne(num: NumberOrString):number {
    return 1 + Number(num)
}


interface User{
    name:string
    age: number
    hobbies: string[]
    
}

const personONe: User = {
    name:"Tony",
    age:34,
    hobbies:['sleep','nothingdo'],
}


// unknown

let a : unknown = 42

let b = a === 42 ? 'hello' : 'world'

// never

function infinit():never {
    while(true){
        console.log(1+1)
    }
}

// class

class UserEx{
    // public name: string
    protected weight: number
    private age: number

    constructor(public name:string){
        this.name = name
    }
}

// Generic

// function halfArr(array:any[]) {
//     return array.slice(0, array.length/2)
// }
// function halfArr<T>(array:T[]):T[] {
//     return array.slice(0, array.length/2)
// }
function halfArr<T extends number| string>(array:T[]):T[] {
    return array.slice(0, array.length/2)
}