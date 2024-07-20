const myNumber=[1,2,3,4,5,6,7,8,9,10];

// console.log(myNumber)


// method 1 to do
// const number1 = myNumber.map((num)=>
//       num+10
//     // console.log(num)
 
// );
// // console.log(number1);


// // // method 2 to do
// const number= myNumber.filter((num)=> { 
//      console.log(num);
//         return num;
//     })
    //console.log(number);

//     method 3 to do
    const number2=myNumber.map((num)=>{ return num+10});
    console.log(number2)
     


//****************************  chaining  ***********************/

// const newNums = myNumber
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)

// //console.log(newNums);

 
