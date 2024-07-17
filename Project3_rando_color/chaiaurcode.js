//random color generate

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'

    for (let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color;

};
let intervalId;

const changeColor= function(){
     intervalId=setInterval(changeBgcolor,100);
         function changeBgcolor  () {
        document.body.style.backgroundColor = randomColor()

    }
}


const stopChanging=function(){
    clearInterval(intervalId);
}


document.querySelector("#start").addEventListener('click',changeColor);
document.querySelector("#stop").addEventListener('click', stopChanging);

// const hex = "0123456789"
// console.log(hex[Math.floor(Math.random() * 16)])



// method 3


// let numberAllowed = true;
// let charAllowed = true;
// let pass = ""
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// if (numberAllowed) str += "0123456789";
// if (charAllowed) str += "~!@#$%^&*(){}||";

// for (let i = 0; i <= 3; i++) {
//     let charIndex = Math.floor(Math.random() * str.length);
//     let char = str.charAt(charIndex);
//     pass += char;


// }
// console.log(pass)


