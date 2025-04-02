function openMenu(){
    document.getElementById('nav-links').classList.add('mobile-nav-links')
    document.getElementById('close-menu').classList.remove('inactive')
    document.getElementById('mobile-menu-icon').classList.add('inactive')
    
}

function closeMenu(){
    document.getElementById('nav-links').classList.remove('mobile-nav-links')
    document.getElementById('close-menu').classList.add('inactive')
    document.getElementById('mobile-menu-icon').classList.remove('inactive')
}