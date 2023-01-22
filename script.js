const menu = document.querySelector(".menu")
const profitDetails = document.querySelector(".profit-details")
const passengerNumDisplay = document.querySelector(".people-entered-num")
const addBtn = document.querySelector(".add-btn")
const minusBtn = document.querySelector(".minus-btn")
const saveBtn = document.querySelector(".save-btn")
const entries = document.querySelector(".entries")
const rate = 100
let passengerNum = 0
let newPassengerValue = 0
let passengerNumArr = []
let totalCashArr = []
let totalPassenger = 0
let totalCash = 0


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
    passengerNumArr.push(passengerNum)
    totalCashArr.push(passengerNum * rate)
    calcEntries()
    passengerNum = 0
    displayPassengerNum()
})

function displayPassengerNum() {
    passengerNumDisplay.textContent = `${passengerNum}`
}

function calcEntries(){
    totalPassenger = passengerNumArr.reduce((a, b) => a + b)
    totalCash = totalCashArr.reduce((a, b) => a + b)
    document.querySelector(".total-entries-info").textContent = `${totalPassenger} Passenger(s)`
    document.querySelector(".cashout").innerHTML = `Cashout: <span><i class="fa-solid fa-naira-sign">${totalCash}`
}