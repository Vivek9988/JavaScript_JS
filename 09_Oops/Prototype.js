// const myName="vivek   ";


// console.log(myName.tureLength);

let myHeros=["thor","hulk"];

let heroPower={
    thor:"hammer",
    hulk:"manPower",

    getSpiderPower:function(){
        console.log(`Spider power is here`)
    }

}

Object.prototype.vivek=function(){
    console.log(`vivek is pesent in all object`)
}

heroPower.vivek();
myHeros.vivek();

/// to make a trim function 
 String.prototype.trueLength=function(){
    console.log(`the trim length is ${this.trim().length}`)
 }
"vivek   ".trueLength()