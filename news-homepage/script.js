const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close");

burger.addEventListener("click", () => {
    navLinks.classList.add("mobile");
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("mobile");
    closeBtn.style.display = "none";
});

// TODO: mudar o fundo quando menu aberto
