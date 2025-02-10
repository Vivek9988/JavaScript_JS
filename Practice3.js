const user={
    name:"vivek",
    tittle:"singh",
    age:21
};

const user2={
    study:"js",
    mode:"laptop",
   // __proto__:user

};

//console.log(user2.name);
//user.__proto__=user2
// console.log(user.study);
Object.setPrototypeOf(user,user2)
console.log(user2.s);



