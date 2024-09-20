class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`User log me${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email,password){
        super(username);
        this.email=email;
        this.password=password

    }

    addCourse(){
        console.log(`The course is addaded ${this.username}`);

    }
}

const vivek= new Teacher("hello" , "vivek@123" , " 123");
 console.log(vivek)
//vivek.addCourse()