let bar = document.querySelector(".items i");
let close = document.querySelector(".scroll-inside i");
let scrollinside = document.querySelector(".scroll-inside");

bar.addEventListener("click",() => {
    scrollinside.classList.toggle("scrollbar-open")
})
close.addEventListener("click",() => {
    scrollinside.classList.toggle("scrollbar-open")
})