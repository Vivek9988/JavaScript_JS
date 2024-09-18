function multipleBy5(num){
    return num*5;
}

multipleBy5.power=2;

//console.log(multipleBy5(5));

function createUser(username,score){
    this.username=username;
    this.score=score;

}

createUser.prototype.increment=function(){
    this.score++
    console.log(`${this.score}`)
}

createUser.prototype.printMe=function(){
    console.log(`score is  ${this.score}`)
}

const chai = new createUser("chat",25);
const tea  = new createUser("tea",35);

chai.printMe()

tea.increment()