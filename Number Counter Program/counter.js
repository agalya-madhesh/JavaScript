const decreasebutton=document.getElementById("decrease-button")
const resetbutton=document.getElementById("reset-button")
const increasebutton=document.getElementById("increase-button")
const buttonlabel=document.getElementById("button-label")
let count=0;

increasebutton.onclick=function(){
    count++;
    buttonlabel.textContent=count;
}

decreasebutton.onclick=function(){
    count--;
    buttonlabel.textContent=count;
}

resetbutton.onclick=function(){
    count=0;
    buttonlabel.textContent=count;
}
