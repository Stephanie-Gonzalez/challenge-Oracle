let amigos = [];

function agregarAmigo() {

    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombre);
    
    inputAmigo.value = '';
    
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    
   
    for (let i = 0; i < amigos.length; i++) {

        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaAmigos.appendChild(elementoLista);
    }
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega al menos uno.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`;
}