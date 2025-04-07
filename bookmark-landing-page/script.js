function openMenu(){
    document.getElementsByTagName('header')[0].classList.add('mobile-menu')
    document.getElementById('open-menu').classList.add('inactive')
    document.getElementById('close-menu').classList.toggle('inactive')
    document.getElementById('logo').src = 'images/logo-bookmark-mobile-menu.svg'
}

function closeMenu(){
    document.getElementsByTagName('header')[0].classList.remove('mobile-menu')
    document.getElementById('open-menu').classList.remove('inactive')
    document.getElementById('close-menu').classList.toggle('inactive')
        document.getElementById('logo').src = 'images/logo-bookmark.svg'
}