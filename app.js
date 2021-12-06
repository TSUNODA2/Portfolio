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




const pres = document.querySelector('.Presentation');
const testPres = pres.textContent;
const presSplit = testPres.split("");
pres.textContent = "";

for(let f=0; f < presSplit.length; f++){
    pres.innerHTML += "<span>"+ presSplit[f] + "</span>"
}
  
let chars = 0;
let timers = setInterval(onTicks, 50);

function onTicks(){
    const span = pres.querySelectorAll('span')[chars];
    span.classList.add('fade');
    chars++
    if(chars === presSplit.length){
        complete();
        return;
    }
}

function complete(){ 
clearInterval(timer);
timer = null;
}