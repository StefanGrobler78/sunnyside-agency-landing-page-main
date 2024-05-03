const toggler = document.getElementById('toggler');
const menu = document.querySelector('.ss__prim-navlist')
toggler.addEventListener('click', () => {
    menu.classList.toggle('slidein')
})