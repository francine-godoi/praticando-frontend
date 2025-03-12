document.addEventListener("submit", (e) => {
    e.preventDefault();
    const vote = document.querySelector('input[name="vote"]:checked');
    if (vote !== null) {
        document.getElementById("rating-card").style.display = "none";
        document.getElementById("thank-you-card").style.display = "flex";
        document.getElementById("stars").textContent = vote.value;
    }
});
