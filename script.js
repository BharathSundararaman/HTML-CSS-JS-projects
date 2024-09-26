var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton= document.getElementById("add-popup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
// select cancel button
var popupcancel=document.getElementById("cancel-popup")
popupcancel.addEventListener("click",function(event){
          event.preventDefault()
          popupoverlay.style.display="none"
          popupbox.style.display="none"
})

//select container,add-book,book-Title-input,Book-Author-Input,Book-Description-Input

var container= document.querySelector(".container")
var addbook= document.getElementById("add-book")
var booktitleinput= document.getElementById("book-Title-input")
var bookauthorinput= document.getElementById("Book-Author-Input")
var bookdescriptioninput= document.getElementById("Book-Description-Input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
             <h5>${bookauthorinput.value}</h5>
             <p>${bookdescriptioninput.value}</p>
             <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}