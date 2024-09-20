// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const vivek =myNumber.map((num) =>num>4);

//console.log(vivek);
// function vivek(){
//     const hello="kaha ja rahe ho";
//     console.log(hello)
//     function gf(){
//         const anjan="hello";
//         console.log(anjan)

//     }

// }
//gf()
//  vivek();

// let heroPower={
//     thor:'hello'
// }

// console.log(heroPower.thor);


// const arr=[1,2,3,4,5,6];
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// {
//     acc="mirganj"
// }

// console.log(acc);

// let str="vivek"

// let num= Number(str);
// console.log(typeof num);
// console.log(num);

//  let str = "hello";      // 'str' is assigned the value "hello"
// str[0] = "H";           // Trying to modify "hello" directly does nothing
// console.log(str);       // Output: "hello" (unchanged)

// str = "Hello";          // Reassigning 'str' to a new string "Hello"
// console.log(str);
let a =4;

// const mySym=Symbol("123")
// const vivek ={
//     [mySym]:"helloi",
//     a:5,
//     name:"vivek",
//     tittle:"raj",

// }

//          console.log(vivek[mySym])



const obj1={name:"singh",roll:24};
const obj2={place:"jigna",dist:45};

// const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1, ...obj2}
console.log(Object.keys(obj1));

console.log(obj3);
