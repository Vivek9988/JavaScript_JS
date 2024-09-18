function setUsername(username){
    this.username=username;

}

function createUser(username,email,password){
    setUsername(username)


    this.email=email;
    this.password=password;
}

const vivek = new createUser("hello","vivek@124","123")

console.log(vivek);