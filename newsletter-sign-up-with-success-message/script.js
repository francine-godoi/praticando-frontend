let contSubscribe = document.getElementsByClassName("container-subscribe");
let contSucess = document.getElementsByClassName("container-sucess");
let email = document.getElementsByName("email");
let userEmail = document.getElementById("user-email");
let erro = document.getElementById("error");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitForm(event) {
  event.preventDefault();

  if (!email[0].value || !validateEmail(email[0].value)) {
    erro.textContent = "Valid email required";
    email[0].classList.add("input-error");
  } else {
    contSubscribe[0].style.display = "none";
    contSucess[0].style.display = "block";
    userEmail.textContent = email[0].value;
  }
}

function dismissMessage() {
  contSubscribe[0].style.display = "flex";
  contSucess[0].style.display = "none";
  erro.textContent = "";
  email[0].classList.remove("input-error");
  email[0].value = "";
  userEmail.textContent = "";
}