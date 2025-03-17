document.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const radioBtn = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById("message");
    const checkBtn = document.querySelector('input[name="consent"]:checked');

    let error = 0;

    if (firstName.value === "") {
        document.getElementById("required-first-name").style.display = "block";
        error++;
    }

    if (lastName.value === "") {
        document.getElementById("required-last-name").style.display = "block";
        error++;
    }

    if (email.value === "" || validateEmail(email.value) === null) {
        document.getElementById("required-email").style.display = "block";
        error++;
    } 

    if (radioBtn === null) {
        document.getElementById("required-query").style.display = "block";
        error++;
    }

    if (message.value === "") {
        document.getElementById("required-message").style.display = "block";
        error++;
    } 

    if (checkBtn === null) {
        document.getElementById("required-consent").style.display = "block";
        error++;
    }

    if (error === 0){    
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        radioBtn.checked = false;
        checkedRadioBtn();
        message.value = "";
        checkBtn.checked = false;     
        document.getElementById('success-msg').style.display = 'block';
        setTimeout(()=>{
            document.getElementById('success-msg').style.display = 'none';
        },3000)
    }
});

document.addEventListener('input', ()=>{
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const radioBtn = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById("message").value;
    const checkBtn = document.querySelector('input[name="consent"]:checked');

    if (firstName !== "") {
        document.getElementById("required-first-name").style.display = "none";
    }

    if (lastName !== "") {
        document.getElementById("required-last-name").style.display = "none";
    }

    if (email !== "" && validateEmail(email) !== null) {
        document.getElementById("required-email").style.display = "none";
    } 

    if (radioBtn !== null) {
        document.getElementById("required-query").style.display = "none";
    }

    if (message !== "") {
        document.getElementById("required-message").style.display = "none";
    } 

    if (checkBtn !== null) {
        document.getElementById("required-consent").style.display = "none";
    }
})

function checkedRadioBtn() {
    const radioBtn = document.querySelectorAll('input[name="query-type"]');
    for (let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            radioBtn[i].parentElement.classList.add("checked-radio");
        } else {
            radioBtn[i].parentElement.classList.remove("checked-radio");
        }
    }
}

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
