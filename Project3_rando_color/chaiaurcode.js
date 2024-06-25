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

