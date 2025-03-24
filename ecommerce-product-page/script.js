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

function addToCart(){
    const quantity = document.getElementById('quantity').textContent
    const itemQuantity = document.getElementById('item-quantity')
    const total = document.getElementById('total')
    const spanIcon = document.getElementById('span-icon')

    const cartEmpty = document.getElementById('cart-empty')
    const cartFull = document.getElementById('cart-full')

    console.log(quantity)
    if (quantity > 0){
        itemQuantity.textContent = quantity
        total.textContent ='$'+ (Number(quantity) * 125).toFixed(2)
        cartEmpty.classList.add('dont-show')
        cartFull.classList.remove('dont-show')
        spanIcon.classList.remove('dont-show')
        spanIcon.textContent = quantity
    }
}

function deleteItem(){
    const cartEmpty = document.getElementById('cart-empty')
    const cartFull = document.getElementById('cart-full')
    const spanIcon = document.getElementById('span-icon')

    cartEmpty.classList.remove('dont-show')
    cartFull.classList.add('dont-show')
    spanIcon.classList.add('dont-show')
}

document.getElementById('icon-cart').addEventListener('mouseover', () =>{
    const cart = document.getElementById('cart-content')
    cart.classList.remove('dont-show')
})


document.addEventListener('click', event => {
    const cart = document.getElementById('cart-content')
    const isClickInside = cart.contains(event.target)

    if (!isClickInside) {
      // The click was OUTSIDE the cart
      cart.classList.add('dont-show')
    }
});
