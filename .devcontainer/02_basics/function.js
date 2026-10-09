// function.js

// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }   
// addTwoNumbers(5, null)


// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }   
// const result = addTwoNumbers(5, 3)

// console.log("Results: ", result)


// function addTwoNumbers(a, b) {
//     let sum = a + b;
//     return sum;

// method 2
//     return a + b;
// }   
// const result = addTwoNumbers(5, 3)

// console.log("Results: ", result)

function loginUser(username) {
    if (!username === undefined) {
        console.log("Please provide a username");
        return;
    }
        return `${username} just logged in`;
    }

console.log(loginUser("JohnDoe"))