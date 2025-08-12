let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaUI = document.getElementById('listaAmigos');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite o nome do amigo!');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Tente outro!');
        inputAmigo.value = '';
        return;
    }

    amigos.push(nomeAmigo);

    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;
    listaUI.appendChild(novoItem);

    inputAmigo.value = '';
}

function sortearAmigo() {
    const resultadoUI = document.getElementById('resultado');
    
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para realizar o sorteio!');
        return;
    }

    embaralhar(amigos);

    resultadoUI.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let amigoDaVez = amigos[i];
        let amigoSorteado = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoDaVez} → ${amigoSorteado}`;
        
        resultadoUI.appendChild(itemResultado);
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}