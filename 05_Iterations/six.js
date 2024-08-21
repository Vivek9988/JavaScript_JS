// For each -------
const myNumsss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const values = myNumsss.forEach((item) => {
    if (item > 4) {                // we write the if else like this in for each
        //console.log(item)
    }

    //return item                 // but we can't like this beacuse it does'nt return anythinf
})

//console.log(values);             //    it does'nt return any value , it will show undefined


// Filter function  -------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {      // we have to write return if we are writing it in curly brace.
    if (num > 4) {
        console.log(num)
    }

    return num>4;


})
console.log(newNums);



// Applying the condition by if else in forEach-----

const newNumss = []

newNumss.forEach((num) => {
    if (num > 4) {
        newNumss.push(num)
    }
})

console.log(newNumss);


// Example of Filter 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// Example with for each

let ite = books.forEach((bks)=>{
    if(bks.genre==='History'){
        console.log(bks)

    }
   
})

let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
//console.log(userBooks)