const coding = ['js', 'html', 'css', 'react', 'node']

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item
// })
// console.log(values)


// const myNums = [1, 2, 3, 4, 5]

// const newNums = myNums.filter((num) => {
//     return num > 2
// }
// )
// console.log(newNums)




const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2010
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    },
    {
        title: 'Book Eight',
        genre: 'Science',
        publish: 2011,
        edition: 2016
    },
    {
        title: 'Book Nine',
        genre: 'Non-Fiction',
        publish: 1981,
        edition: 1989
    }
];


let UserBooks = books.filter((bk) => bk.genre === 'History')
UserBooks = books.filter((bk) => {return bk.publish >= 1990})

// console.log(UserBooks);



const newNums = [1,2,3,4,5,6,7,8,9,10]


// const UpdateNums = newNums.map((num) => { return num + 10})

const UpdateNums = newNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num > 50)


// console.log(UpdateNums);


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, num){
//     console.log(`acc: ${acc}, num: ${num}`);
//     return acc + num
// }, 0)

const myTotal = myNums.reduce((acc, num) => acc + num, 0)
// console.log(myTotal);

const ShoppingCart = [
    {
        itemName:"Js Course",
        price: 3000
    },
    {
        itemName:"Python Course",
        price: 5000
    },
    {
        itemName:"Web development Course",
        price: 10000
    }
]

const priceTopay =  ShoppingCart.reduce((acc, item) => acc + item.price, 0)


console.log(priceTopay);