 //quantidade

function comprar(id) {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = Number(document.getElementById('qtd').value);
    
    if(tipoIngresso == 'pista') {
        comprarPista(quantidade);
    }
    if(tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    }
    if(tipoIngresso == 'inferior') {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let quantidadePista = Number(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista) {
        alert('Quantidade indisponível para tipo lista')
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = Number(document.getElementById('qtd-superior').textContent);
    if(quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível para tipo lista')
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = Number(document.getElementById('qtd-inferior').textContent);
    if(quantidade > quantidadeInferior) {
    alert('Quantidade indisponível para tipo lista')
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso');
    }
}