

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
        const imagemSrc = product.querySelector('img').src
        cartItems.push({ title, price, imagemSrc })
        cartCounter.textContent = cartItems.length

        console.log(cartItems)
        console.log(cartCounter)
        console.log(imagemSrc)
        console.log(title)
        console.log(price)
    })
})


// Criando um objeto carrinho..



// let carrinho = {

// }

// const addIemAoCarrinho = () => {



// }