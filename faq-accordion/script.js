accordion = document.getElementsByClassName("title-question");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        accordion[i].nextElementSibling.classList.toggle("open");
        accordion[i].children[1].classList.toggle("inactive");
        accordion[i].children[2].classList.toggle("open");
    });
}

/* 
    TODO: remake accordion

    https://www.aditus.io/patterns/accordion/

    Accessible Accordion

    Navigate the questions and hide/show answers using keyboard navigation alone

*/