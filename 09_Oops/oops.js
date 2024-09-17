// const user={
//     username:"vivek",
//     name:"singh",
//     password:"hello",
//     another:{
//         username:"rajsingh",
//         getUserdetails: function () {
//             return this.username;
//         }

//     },
   
    
// }

// console.log(user.another.getUserdetails());

function User(username, logincount, isLoggened){
    this.username=username;
    this.logincount=logincount;
    this.isLoggened=isLoggened;
    

    
    
}

const user1=User("vivek",  45,true)
console.log(user1);

// function vivek(){
//      this.singh="hello"
// }

// const v1=new vivek()
// console.log(v1.singh);
