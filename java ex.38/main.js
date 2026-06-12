const togglebutton = document.querySelector(".toggle-btn")
const navbar = document.querySelector(".navbar");



togglebutton.addEventListener("click", function () {
    navbar.classList.toggle("active");
    console.log("clickta mashaqeynosa aan firiyo")
})