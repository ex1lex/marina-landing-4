const cartBtn = document.getElementById('cart-button')
const hiddenCart = document.getElementById('hidden-cart-block')
const hiddenCartCloseBtn = document.getElementById('close-cart-btn')

cartBtn.onclick = function () {
  hiddenCart.style.display = 'flex'
}

hiddenCartCloseBtn.onclick = function () {
  hiddenCart.style.display = 'none'
}
