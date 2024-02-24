var popup =document.querySelector(".popup")
var popupbox =document.querySelector(".popup-box")
var buttonid=document.getElementById("button")

buttonid.addEventListener("click",function(){
    popup.style.display="block"
    popupbox.style.display="block"
})


var  cancelpopup=document.getElementById("canceltop")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbutton=document.getElementById("addtop")
var choosefav=document.getElementById("one")
var favtop=document.getElementById("two")
var description=document.getElementById("three")

addbutton.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "container-1")
    div.innerHTML=`<h2>${choosefav.value}</h2>
    <h4>${favtop.value}</h4>
    <p>${description.value}</p>
    <button onclick="deletebutton(event)">Delete</button>`
    container.append(div)
    popup.style.display="none"
    popupbox.style.display="none"
})

function deletebutton(event){
    event.target.parentElement.remove()
}
