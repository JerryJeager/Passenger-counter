const menu = document.querySelector(".menu")
const profitDetails = document.querySelector(".profit-details")
const passengerNumDisplay = document.querySelector(".people-entered-num")
const addBtn = document.querySelector(".add-btn")
const minusBtn = document.querySelector(".minus-btn")
const saveBtn = document.querySelector(".save-btn")
const entries = document.querySelector(".entries")
let passengerNum = 0
let newPassengerValue = 0

menu.addEventListener("click", () => {
    profitDetails.classList.toggle("hide-profit-details")
})

addBtn.addEventListener("click", () => {
    ++passengerNum
    displayPassengerNum()
})

minusBtn.addEventListener("click", () => {
    if (passengerNum <= 0)
        return
    passengerNum--
    displayPassengerNum()
})

saveBtn.addEventListener("click", () => {
    // alert("Entry saved.")
    newPassengerValue = passengerNumDisplay.textContent
    if(newPassengerValue == 0 || !newPassengerValue)
        return
    entries.innerHTML += `<div class="people-entered-num entry">${passengerNum}</div>`
    passengerNum = 0
    displayPassengerNum()
})

function displayPassengerNum() {
    passengerNumDisplay.textContent = `${passengerNum}`
}