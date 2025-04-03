function openMenu() {
  document.getElementById("nav-links").classList.add("mobile-nav-links");
  document.getElementById("close-menu").classList.remove("inactive");
}

function closeMenu() {
  document.getElementById("nav-links").classList.remove("mobile-nav-links");
  document.getElementById("close-menu").classList.add("inactive");
}

let currentSlide = 1;
const desktopImages = document.getElementsByClassName('desktop');
const mobileImages = document.getElementsByClassName('mobile-image');
const desktopInfo = document.getElementsByClassName('info');

function changeSlide(direction){

  if (direction === 'prev'){
    if (currentSlide - 1 === 0){
      currentSlide = desktopImages.length;
    } else {
      currentSlide -= 1;
    }
  } else if (direction === 'next'){
    if (currentSlide + 1 > desktopImages.length){
      currentSlide = 1;
    } else {
      currentSlide += 1;
    }
  }

  for (let i = 0; i < desktopImages.length; i++){
    if (desktopImages[i].id == currentSlide){
      desktopImages[i].classList.remove('inactive')
      mobileImages[i].classList.remove('inactive')
      mobileImages[i].classList.add('mobile')
      desktopInfo[i].classList.remove('inactive')
    } else {
      desktopImages[i].classList.add('inactive')
      mobileImages[i].classList.add('inactive')
      mobileImages[i].classList.remove('mobile')
      desktopInfo[i].classList.add('inactive')
    }
  }

}


document.onkeydown = function(e) {
  if (e.code == 'ArrowLeft'){
    changeSlide("prev");
  } else if (e.code == 'ArrowRight'){
    changeSlide("next");   
  }

}
