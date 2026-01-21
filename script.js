const shoe = document.getElementById("shoe");
const shine = document.querySelector(".shine");

shoe.addEventListener("click", () => {
    shine.classList.remove("active");
    void shine.offsetWidth; // перезапуск анимации
    shine.classList.add("active");
});