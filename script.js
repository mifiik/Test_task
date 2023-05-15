let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
burger.addEventListener('click', btn)
function btn() {
   menu.classList.toggle('hapend')
   burger.classList.toggle('active')
}