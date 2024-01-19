function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        botao.innerText = "Mostrar Senha"
    } else {
        input.setAttribute('type', 'text')
        botao.innerText = "Ocultar Senha"
    }
}

function botao2() {
    let teste = document.querySelector("#teste1")
    let ul = teste.querySelector('ul')

    let newLi = document.createElement('li')
    newLi.innerText = "Item adicionado"

    ul.append(newLi)

    let newUl = document.createElement('ul')
    newUl.innerHTML = "<li>kkkkkkk</li>"

    const newButton = document.createElement('button')
    newButton.innerText = 'Botão'

    ul.append(newButton)
}

function botao1() {
    const li = document.querySelector('li')
    li.innerText = 'kakakkaakakak'
}

const bot = document.querySelector('#botao1')
bot.addEventListener('click', botao1)

console.log(document.querySelector('#teste1 ul').innerHTML)