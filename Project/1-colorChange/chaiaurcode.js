const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(buttons)


buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor='grey'
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = 'white'
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
        }



    });
});
