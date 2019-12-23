const burgerButton = document.querySelector('.burger-button')
const menu = document.querySelector('.menuContainer')
function liftMenu(){
    if(menu.classList.contains('is-active')){
        console.log('hided');
        menu.classList.remove('is-active')
    } else {
        console.log('muestro')
        menu.classList.add('is-active')
    }
}
// ¿Es necesario?
const ipad = window.matchMedia("screen and (max-width: 768px)");
ipad.addListener(vadilation)
function vadilation(event){
    if(event.matches){
        console.log('ok')
        burgerButton.addEventListener("click", liftMenu)
    } else {
        console.log('well')
        burgerButton.removeEventListener("click", liftMenu)
    }
}
vadilation(ipad)