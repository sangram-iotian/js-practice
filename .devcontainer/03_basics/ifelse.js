// const userloginPassword = true
// const temperature = 60

// if ( temperature === 40) {
//     console.log("less then 50 ");
// }
// else {
//     console.log("greater then 50");
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000

// if (balance < 500) {
//     console.log("Less then 500");
// }
// else if (balance < 750) {
//     console.log("Less then 750");
// }
// else {
//     console.log("Greater then 1000");
// }


// const userloginPassword = true
// const debitCard = true
// const loginfromGoigle = false
// const loginfromEmail = true

// if (userloginPassword && debitCard && 2===3) {
//     console.log("Allow to buy course");
// }
// if (userloginPassword || debitCard || loginfromGoigle || loginfromEmail) {
//     console.log("User is logged in");
// }


// switch

// const month = "March"

// switch (month) {
//     case "January":
//         console.log("This is January");
//         break;
//     case "February":
//         console.log("This is February");
//         break;
//     case "March":
//         console.log("This is March");
//         break;
//     default:
//         console.log("This is not a month");
// }       


// const userEmail = "sangram@gmail.com"

// if (userEmail){
//     console.log("User is logged in");
// }
// else {
//     console.log("User is not logged in");
// }


// false value

//  false, 0, -0, BiginIt on, bull, undefined, null, NaN, "", ''

// ture values
// "0" "false", " ", [], {}, function(){}, 

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing operator (??): null undefined


let val1;

// val1 == 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20

// console.log(val1);

const iceTeaPrice = 100

iceTeaPrice > 100 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");

