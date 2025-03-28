function decrease() {
    const quantity = document.getElementById("quantity");
    quantity.textContent = Math.max(Number(quantity.textContent) - 1, 0);
}

function increase() {
    const quantity = document.getElementById("quantity");
    quantity.textContent = Number(quantity.textContent) + 1;
}

function addToCart() {
    const quantity = document.getElementById("quantity").textContent;
    const itemQuantity = document.getElementById("item-quantity");
    const total = document.getElementById("total");
    const spanIcon = document.getElementById("span-icon");

    const cartEmpty = document.getElementById("cart-empty");
    const cartFull = document.getElementById("cart-full");

    if (quantity > 0) {
        itemQuantity.textContent = quantity;
        total.textContent = "$" + (Number(quantity) * 125).toFixed(2);
        cartEmpty.classList.add("dont-show");
        cartFull.classList.remove("dont-show");
        spanIcon.classList.remove("dont-show");
        spanIcon.textContent = quantity;
    }
}

function deleteItem() {
    const cartEmpty = document.getElementById("cart-empty");
    const cartFull = document.getElementById("cart-full");
    const spanIcon = document.getElementById("span-icon");

    cartEmpty.classList.remove("dont-show");
    cartFull.classList.add("dont-show");
    spanIcon.classList.add("dont-show");
}

document.getElementById("icon-cart").addEventListener("click", () => {
    const cart = document.getElementById("cart-content");
    cart.classList.remove("dont-show");
});

document.addEventListener("click", (event) => {
    const cartContent = document.getElementById("cart-content");
    const cart = document.getElementById("icon-cart")
    const isClickInside = cart.contains(event.target);
    
    if (!isClickInside) {
        cartContent.classList.add("dont-show");
    }
});

let currentId = 1;

function changeImage(index) {
    const thumbs = document
        .getElementsByClassName("grid-gallery")
        .item(0).children;
    const mainImgs = document
        .getElementsByClassName("main-image-display")
        .item(0).children;

    if (index === "prev") {
        index = currentId - 1;
        if (index === 0) {
            index = thumbs.length;
        }
    }

    if (index === "next") {
        index = currentId + 1;
        if (index > thumbs.length) {
            index = 1;
        }
    }
    currentId = index;

    for (let i = 0; i < thumbs.length; i++) {
        if (thumbs[i].children[0].id === "img" + index) {
            thumbs[i].classList.add("thumb-active");
            thumbs[i].children[0].classList.add("active");
            mainImgs[i].classList.remove("inactive");
        } else {
            thumbs[i].classList.remove("thumb-active");
            thumbs[i].children[0].classList.remove("active");
            mainImgs[i].classList.add("inactive");
        }
    }
}

function openLightBox() {
    if (window.innerWidth > 800) {
        document.getElementById("light-box").style.display = "flex";
        document.getElementById("dim").classList.add("dim");
    }
}

function closeLightBox() {
    document.getElementById("light-box").style.display = "none";
    document.getElementById("dim").classList.remove("dim");
}

function changeImageLightBox(index) {
    const thumbs = document
        .getElementsByClassName("light-box-grid-gallery")
        .item(0).children;
    const mainImgs = document.getElementsByClassName("light-box-main-image");

    for (let i = 0; i < thumbs.length; i++) {
        if (i + 1 === index) {
            thumbs[i].classList.add("light-box-thumb-active");
            thumbs[i].children[0].classList.add("active");
            mainImgs[i].classList.remove("inactive");
        } else {
            thumbs[i].classList.remove("light-box-thumb-active");
            thumbs[i].children[0].classList.remove("active");
            mainImgs[i].classList.add("inactive");
        }
    }
}

function previousImg() {
    let [activeImgId, thumbsLenght] = getActiveImgId();

    if (activeImgId - 1 === 0) {
        activeImgId = thumbsLenght;
    } else {
        activeImgId -= 1;
    }
    changeImageLightBox(activeImgId);
}

function nextImg() {
    let [activeImgId, thumbsLenght] = getActiveImgId();

    if (activeImgId + 1 > thumbsLenght) {
        activeImgId = 1;
    } else {
        activeImgId += 1;
    }
    changeImageLightBox(activeImgId);
}

function getActiveImgId() {
    const activeImg = document.getElementsByClassName("light-box-thumb-active");
    const thumbs = document
        .getElementsByClassName("light-box-grid-gallery")
        .item(0).children;

    let activeImgId = "";

    for (let i = 0; i < activeImg.length; i++) {
        if (
            activeImg[i].parentElement.classList.contains(
                "light-box-grid-gallery"
            )
        ) {
            activeImgId = activeImg[i].children[0].id;
            break;
        }
    }
    return [Number(activeImgId), thumbs.length];
}

lightBoxThumbs = document
    .getElementsByClassName("light-box-grid-gallery")
    .item(0).children;
for (let i = 0; i < lightBoxThumbs.length; i++) {
    lightBoxThumbs[i].addEventListener("mouseover", () => {
        lightBoxThumbs[i].style.backgroundColor = "white";
        lightBoxThumbs[i].style.borderRadius = "12px";
    });
}


function openMenu(){
    const navLinks = document.getElementById('nav-links')
    const closeBtn = document.getElementById('close-menu')
    navLinks.classList.toggle("mobile")
    closeBtn.classList.toggle("inactive")
    document.getElementById("dim").classList.add("dim");
}

function closeMenu(){
    const navLinks = document.getElementById('nav-links')
    const closeBtn = document.getElementById('close-menu')
    navLinks.classList.toggle("mobile")
    closeBtn.classList.toggle("inactive")
    document.getElementById("dim").classList.remove("dim");
}