

let produto = document.querySelector('.product')

let imagem = produto.querySelector('img').getAttribute('src')

const buttons = document.querySelectorAll('button')

// seleciona o elemento do carrinho pelo ID
const cartCounter = document.querySelector('#cart-counter');




let cartItems = []

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const product = button.parentNode
        const title = product.querySelector('h3').textContent
        const price = product.querySelector('a').textContent
        const description = product.querySelector('p').textContent
        const imagemSrc = product.querySelector('img').src
        cartItems.push({ title, price, description, imagemSrc })
        cartCounter.textContent = cartItems.length

        console.log(cartItems)
        console.log(cartCounter)
        console.log(imagemSrc)
        console.log(title)
        console.log(price)
        console.log(description)
    })
})


const closeSidebarButton = document.querySelector('.close-sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebar = document.querySelector('.sidebar');

onmousemove = "openSidebarButton()"

const openSidebarButton = () => {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });

    closeSidebarButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });
}


