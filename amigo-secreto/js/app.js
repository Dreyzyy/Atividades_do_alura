    let amigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if(nomeAmigo == '') {
        alert('Digite o nome do amigo!');
        return;
    }

    if(amigos.includes(nomeAmigo)) {
        alert('O nome do amigo já foi adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo);

    if(lista.textContent == '') {
        lista.textContent = nomeAmigo;
        nomeAmigo.value = '';
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo;
        nomeAmigo.value = '';
    }
}

function sortear() {

    if(amigos.length < 3) {
        alert('adicione pelo menos 3 amigos!');
        return;
    }
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i< amigos.length; i++) {

        if(i == amigos.length - 1){
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[1] + '-->' + amigos[0] + '<br>';
        } else{
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}