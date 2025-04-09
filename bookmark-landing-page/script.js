function openMenu() {
  document.getElementsByTagName("header")[0].classList.add("mobile-menu");
  document.getElementById("open-menu").classList.add("inactive");
  document.getElementById("close-menu").classList.toggle("inactive");
  document.getElementById("logo").src = "images/logo-bookmark-mobile-menu.svg";
}

function closeMenu() {
  document.getElementsByTagName("header")[0].classList.remove("mobile-menu");
  document.getElementById("open-menu").classList.remove("inactive");
  document.getElementById("close-menu").classList.toggle("inactive");
  document.getElementById("logo").src = "images/logo-bookmark.svg";
}

function changeTab(index) {
  const tabs = document.getElementsByClassName("tab");
  const images = document.getElementsByClassName("features-image");
  const info = document.getElementsByClassName("features-details-info");

  console.log(images[0]);

  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].id === "tab-" + index) {
      tabs[i].classList.add("active");
      images[0].children[i].classList.remove("inactive");
      info[0].children[i].classList.remove("inactive");
    } else {
      tabs[i].classList.remove("active");
      images[0].children[i].classList.add("inactive");
      info[0].children[i].classList.add("inactive");
    }
  }
}

question = document.getElementsByClassName("question-info");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    question[i].nextElementSibling.classList.toggle("active");
    question[i].children[1].classList.toggle('open-answer');
    question[i].children[1].classList.toggle('closed-answer');
  });
}

function checkEmail() {
  email = document.getElementById('email');
  if (validateEmail(email.value) == null) {
    document.getElementById('error').style.display = 'block'
    email.classList.add('email-error')
  } else {
    document.getElementById('error').style.display = 'none'
    email.classList.remove('email-error')
    email.value = ''
  }
}

function validateEmail(email) {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}