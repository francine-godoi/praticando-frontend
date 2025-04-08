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
    const tabs = document.getElementsByClassName('tab')
    const images = document.getElementsByClassName('features-image')
    const info = document.getElementsByClassName('features-details-info')

    console.log(images[0])

    for (let i = 0; i < tabs.length; i++){
        if (tabs[i].id === 'tab-'+index){
            tabs[i].classList.add('active')
            images[0].children[i].classList.remove('inactive')
            info[0].children[i].classList.remove('inactive')
        }else{
            tabs[i].classList.remove('active')
            images[0].children[i].classList.add('inactive')
            info[0].children[i].classList.add('inactive')
        }
    }
    

}
