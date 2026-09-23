// data types premitive / Non premitive
// premitive 
//  7 Types: string, null, boolean , number , symbol, undefined, BigInt

const score = 100

const scoreValue = 100.3


const isLoggedIn = false
const Tempoutside = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 6343342616715n

// Non Premitive

// ReferenceError, object, functions
const heros = ["Saktiman", "Bodhiman", "Electricman"]

let myobj = {
    name: "sangram",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof bigNumber)
