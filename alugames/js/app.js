function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let btn = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        btn.textContent = 'Alugar';
        btn.classList.remove('dashboard__item__button--return')
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        btn.textContent = 'Devolver';
        btn.classList.add('dashboard__item__button--return');
    }
}