let listaDosNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function mostrarTextoNaTela(tag, texto) { //visual
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial () {
mostrarTextoNaTela('h1' , 'Jogo do número secreto'); //visual
mostrarTextoNaTela('p' , 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() { //jogo
    let chute = document.querySelector('input').value;
    let numeroChute = Number(chute); //o que o usuario digitou
    if(numeroChute === numeroSecreto) {
        mostrarTextoNaTela('h1' , 'PARABÉNS! Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        mostrarTextoNaTela('p' , mensagemTentativas);
        let reiniciar = document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroChute > numeroSecreto) {
            mostrarTextoNaTela('p' , 'O número secreto é menor...');
        } else {
            mostrarTextoNaTela('p' , 'O número secreto é maior...');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * 10) +1;
    let quantidadeDeElementosNaLista = listaDosNumerosSorteados.length;

    if(quantidadeDeElementosNaLista === 10) {
        listaDosNumerosSorteados = [];
    }

    if(listaDosNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDosNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' ,true);
}