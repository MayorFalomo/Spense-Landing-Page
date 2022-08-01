const hamburgerLines = document.querySelector(".hamburgerLines")
const Menu = document.querySelector(".Menu");

hamburgerLines.addEventListener("click", () => {
    hamburgerLines.classList.toggle("active");
    Menu.classList.toggle("active");
})

const myForm = document.querySelector(".myForm")
const startBtn = document.querySelector(".startBtn")
const input = document.querySelector(".input")

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    myForm.classList.toggle("active")
    input.focus()
})


window.onload = function () {
    const effect = document.querySelector(".reveal");

    window.addEventListener("scroll", scrollEffect());

    function scrollEffect() {
        if (window.screenX >= 0) {
            effect.style.opacity = "1";
            effect.style.transform = "translateX(0px)";
            effect.style.transition = "9s ease-in-out";
        } else {
            effect.style.opacity = "0";
            effect.style.transform = "translateX(-20px)";
        }
    }
    scrollEffect()
}