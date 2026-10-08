const mySym = Symbol("Key1");

const JsUser = {
    name: "Sangram",
    [mySym]: "Key1",
    age: 18,
    location: "Dhaka, Bangladesh",
    email: "sangram@iot.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser.location)
// console.log(JsUser["email"])
// console.log( typeof JsUser[mySym])


JsUser.email = "sangrambarmon@iphone.com"
// Object.freeze(JsUser)
JsUser.email = "Rakesh@gmail.com"
// console.log(JsUser)


JsUser.greeting = function() {
    console.log("hello Js User")
}

JsUser.greetingTwo = function() {
    console.log(`Hello ${this.name} welcome to ${this.location}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());