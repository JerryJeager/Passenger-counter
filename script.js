const menu = document.querySelector(".menu")
const profitDetails = document.querySelector(".profit-details")
const passengerNumDisplay = document.querySelector(".people-entered-num")
const addBtn = document.querySelector(".add-btn")
const minusBtn = document.querySelector(".minus-btn")
let passengerNum = 0

menu.addEventListener("click", () => {
    profitDetails.classList.toggle("hide-profit-details")
})

addBtn.addEventListener("click", () => {
    passengerNumDisplay.textContent = `${++passengerNum}`
})

minusBtn.addEventListener("click", () => {
    if(passengerNum < 0)
        return
    passengerNumDisplay.textContent = `${passengerNum--}`
})