function sortear() {
   let quantidade = parseInt(document.getElementById('quantidade').value);
   let doNumero = parseInt(document.getElementById('de').value);
   let ateNumero = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;
   for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(doNumero, ateNumero);

      while(sorteados.includes(numero)) {
         numero = obterNumeroAleatorio(doNumero, ateNumero);
      }

      sorteados.push(numero);
   }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`

   alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
   let btnReiniciar = document.getElementById('btn-reiniciar');

   if(btnReiniciar.classList.contains('container__botao-desabilitado')) {
      btnReiniciar.classList.remove('container__botao-desabilitado');
      btnReiniciar.classList.add('container__botao');
   } else {
   btnReiniciar.classList.remove('container__botao');
    btnReiniciar.classList.add('container__botao-desabilitado');
   }
}

function reiniciar() {
   document.getElementById('quantidade').value = ''
   document.getElementById('de').value = ''
   document.getElementById('ate').value = ''
   document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora'
   alterarStatusBotao();
}