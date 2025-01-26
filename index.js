// eventListener = Listen for specific events to create interactive web pages
 //                     events : clicks, mouseover, mouseout. addeventListener(event, callbacks) ;               






const myBox =  document.getElementById("myBox");

/*function changeColor(event){
   
    event.target.style.backgroundColor = "red";
    event.target.textContent = "WOW! 😍";


}

myBox.addEventListener("click", changeColor);*/

myBox.addEventListener("mouseover", event => {

    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it  😒";
});

myBox.addEventListener("click", event => {

    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "WTF! 😤";

});

myBox.addEventListener("mouseout", event=> {
   event.target.style.backgroundColor = "grey";
   event.target.textContent = "Click Me 😊";


});