const nav = document.querySelector("nav");
const close = document.querySelector(".close")
const open = document.querySelector(".menu")
const menuQuote = document.querySelector(".menu-quote")

open.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})

close.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})

menuQuote.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})