"use strict"

console.log("hello fellow")

window.onload = function () {
    let estimateForm = document.querySelector("#estimateForm");

    estimateForm.addEventListener("submit", stayEstimate);

}
function stayEstimate(event) {
    event.preventDefault();

    let estimateForm = event.target;

    let roomTotal = Number(estimateForm.numOfNights.value) * getRoomRate(estimateForm.checkInDate.value, estimateForm.roomType.value);

    console.log(roomTotal);

    console.log(estimateForm.checkInDate.value)



    function getRoomRate(checkInDate, roomType) {
//got this from listening to instructor
        let checkInDatedate = new Date(checkInDate).getMonth() + 1
    //rate of 
        let rate = estimateForm.roomType.value
        if (roomType === "suite") {
            return 210;
        } if (roomType === "queen") {
            return 150;
        } if (roomType === "king") {
            return 150;   }
        return roomTotal
    }
}