const formulario = document.querySelector('.form__exemplo')
const divTexto = document.querySelector('.texto__exibido')

formulario.addEventListener('submit', function(evento) {
evento.preventDefault()

const input = document.getElementById('textoInput')
const valorInput = input.value

const inputNome = document.getElementById('nomeInput')
const valorInputNome = inputNome.value

let novaLinha = document.createElement('div')
divTexto.appendChild(novaLinha)
novaLinha.classList.add('nova__linha')

const novoTexto = document.createElement('p')
novaLinha.appendChild(novoTexto)
novoTexto.textContent = valorInput
novoTexto.classList.add('novo__texto')

const novoNome = document.createElement('p')
novaLinha.appendChild(novoNome)
novoNome.textContent = valorInputNome
novoNome.classList.add('novo_nome')

formulario.reset
})