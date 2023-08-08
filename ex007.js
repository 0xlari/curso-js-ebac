function avaliar() {
    var botao =window.document.querySelector('input#button')
botao.addEventListener('click', clicar)
botao.addEventListener('mouseenter', entrar)
botao.addEventListener('mouseout', sair)

function clicar(){
botao.innerText = 'Clicou!'
botao.style.background= 'red'
}

function entrar(){
botao.innerText = 'Entrou'
botao.style.background = '#2980b9'
}

function sair(){
botao.innerText = 'Saiu :('
botao.style.background = '#3498db'

}
    
var B = window.document.getElementById('Nb')
var A = window.document.getElementById('Na')
var mensagem = window.document.getElementById('msg')
var NumberB = Number(B.value)
var NumberA = Number(A.value)

if (NumberB > NumberA) {
    mensagem.innerHTML = `<strong>Parabens</strong>, você se superou! Sua segunda nota foi ${NumberB}, maior que a primeira.`
} else {
    mensagem.innerHTML = `Você foi <strong>REPROVADO</strong>! Sua segunda nota foi ${NumberB}, menor que a primeira.`
}
}