const form = document.querySelector('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let height= document.querySelector('#height').value
    console.log(height);
    let weight = document.querySelector('#weight').value
    console.log(weight);
})