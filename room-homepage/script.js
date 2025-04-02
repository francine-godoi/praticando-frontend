function openMenu() {
  document.getElementById("nav-links").classList.add("mobile-nav-links");
  document.getElementById("close-menu").classList.remove("inactive");
}

function closeMenu() {
  document.getElementById("nav-links").classList.remove("mobile-nav-links");
  document.getElementById("close-menu").classList.add("inactive");
}
