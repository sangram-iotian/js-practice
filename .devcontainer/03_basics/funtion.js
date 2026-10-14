function calculatePrice(...items) {
    return items
}

console.log(calculatePrice(10, 20, 30));

const user = {
    username: "orange",
    price: 100
}
function handleObject(user){
    console.log(`user name is ${user.username} and price is ${user.price}`);
}
handleObject(user);

handleObject({
    username: "banana", 
    price: 200
});

const NewArray = [1, 2, 3, 4, 5];
function secondValue(getArray){
    return getArray[1]
}
console.log(secondValue(NewArray));