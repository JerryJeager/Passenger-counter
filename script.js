const menu = document.querySelector(".menu")
const profitDetails = document.querySelector(".profit-details")

menu.addEventListener("click", () => {
    profitDetails.classList.toggle("hide-profit-details")
})
