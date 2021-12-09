const text = document.querySelector('.Name');
const testText = text.textContent;
const splitText = testText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 150);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){ 
clearInterval(timer);
timer = null;
}

let barRes = document.querySelector('.navResposiv');
let bodyAccueil = document.querySelector('body');

barRes.addEventListener('click', function(){
    bodyAccueil.classList.toggle('open');
    
})