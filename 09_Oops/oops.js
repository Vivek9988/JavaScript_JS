const user={
    username:"vivek",
    name:"singh",
    password:"hello",
   
    getUserdetails:function (){
        console.log(this.username);
    }
}

console.log(user.getUserdetails());