accordion = document.getElementsByClassName("title-question");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        accordion[i].nextElementSibling.classList.toggle("open"); /* answer */
        accordion[i].children[1].classList.toggle("inactive"); /* plus sign */
        accordion[i].children[2].classList.toggle("open"); /* minus sign */
    });
}