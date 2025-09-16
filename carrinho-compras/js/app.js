let totalGeral;
limpar();

function adicionar(id) {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    
    let preco = valorProduto * quantidade;
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${produto} <span class="texto-azul">${preco}</span>
        </section>`
    
        totalGeral = totalGeral + preco;

        let total = document.getElementById('valor-total');
        total.textContent = `R$${totalGeral}`;
        quantidade = document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = Number();
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '';
}