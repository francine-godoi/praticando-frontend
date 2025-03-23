function decrease() {
    const quantity = document.getElementById('quantity')
    quantity.textContent = Math.max(Number(quantity.textContent) - 1, 0)
}

function increase(){
    const quantity = document.getElementById('quantity')
    quantity.textContent = Number(quantity.textContent) + 1
}

function changeImage(e){
    const thumbs = document.getElementsByClassName('grid-gallery').item(0).children
    const mainImgs = document.getElementsByClassName('main-image-display').item(0).children

    for(let i = 0; i < thumbs.length; i++){
        if (thumbs[i].children[0] === e.target){
            thumbs[i].classList.add('thumb-active')   
            thumbs[i].children[0].classList.add('active')
            mainImgs[i].classList.remove('inactive')
        }else{
            thumbs[i].classList.remove('thumb-active') 
            thumbs[i].children[0].classList.remove('active')
            mainImgs[i].classList.add('inactive')
        }
    }

}