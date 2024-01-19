// Elementos
const lista = document.querySelector('ul')
const input = document.querySelector('input')

//Funções
function addItem(e) {
    if(e.key === 'Enter') {   
        let newLi = document.createElement('li')
        newLi.innerText = input.value
        lista.append(newLi)
        input.value = ''
    }
}

// Eventos
input.addEventListener('keypress', addItem)

