function showShareBtn(){
    let shareIcons = document.getElementsByClassName('share-icons')
    let arrowIcon = document.getElementsByClassName('arrow-div')

    if (arrowIcon[0].classList.contains('share-active')){
        shareIcons[0].classList.remove('share-icons-show')    
        arrowIcon[0].classList.remove('share-active')
    } else {
        shareIcons[0].classList.add('share-icons-show')    
        arrowIcon[0].classList.add('share-active')
    }
}

