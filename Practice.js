function setUsername(username1,email1) {
    this.username1 = username1;
    this.email1=email1
    

}

function createUser(username, email, password) {
    setUsername.call(this, username, email)    //.call makes setUsername to use the(this)of createUser which we are passing, 
    // and(this) refers to the newly created object.


    this.email = email;
    this.password = password;
}

const vivek = new createUser("hello", "vivek@124", "123")    // we create the 

console.log(vivek);