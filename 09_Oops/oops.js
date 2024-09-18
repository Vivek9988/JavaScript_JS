
function User(username, logincount, isLoggened){
    this.username=username;
    this.logincount=logincount;
    this.isLoggened=isLoggened;
}

const user1=new User("vivek",  45,true)
console.log(user1);

// function vivek(){
//      this.singh="hello"
// }

// const v1=new vivek()
// console.log(v1.singh);
