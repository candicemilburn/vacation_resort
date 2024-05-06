"use strict"

console.log("hello fellow")

window.onload = function(){
    let estimateForm = document.querySelector("#estimateForm");
    
    estimateForm.addEventListener("submit", stayEstimate);

}

function stayEstimate(event){
    event.preventDefault();

    let estimateForm = event.target;

    console.log("you submitted the form");
}