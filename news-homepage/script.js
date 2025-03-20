const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close");
const dim = document.getElementById("dim");

burger.addEventListener("click", () => {
    navLinks.classList.add("mobile");
    closeBtn.style.display = "block";
    dim.classList.add("dim");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("mobile");
    closeBtn.style.display = "none";
    dim.classList.remove("dim");
});
