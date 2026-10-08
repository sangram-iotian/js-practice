//  singleton obj

// const tinderUser = new obj()

// obj literals 

const tinderUser = {
    // email: "123bgf",
    // name: "Sangram",
    // isLoggedIn: false,
}
    tinderUser.email = "123bgf"
    tinderUser.name= "Sangram"
    tinderUser.isLoggedIn= false

// console.log(tinderUser)
// console.log(tinderUser.email)
// console.log(tinderUser.name)
// console.log(tinderUser.isLoggedIn)


const regulerUser = {
    email: "123bgf",
    fullname: {
        userfullname: {
            firstname: "Sangram",
            lastname: "Kumar"
        }
    }
}

console.log(regulerUser.fullname.userfullname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const User = [
    {
        id: 1,
        email: "sangam@gmail.com"
    },
    {
        id: 2,
        email: "sgdhm@gmail.com"
    },
    {
        id: 3,
        email: "fghjsam@gmail.com"
    }
]

User[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

