console.log(document.getElementById('marshmallow'))
console.log(document.getElementsByClassName('externo'))
console.log(document.getElementsByTagName('p'))
console.log(document.querySelector('footer p a'))
console.log(document.querySelectorAll('h1'))

document.querySelector('article p strong').innerText = 'TESTE'

let li = document.createElement('li')
li.innerText = 'TESTE'
document.querySelector('ul').append(li)