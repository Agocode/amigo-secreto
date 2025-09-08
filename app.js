//lista-array para alamcenar los nombres de los amigos
let amigos = [];
function agregarAmigo() {
    let inputElement = document.getElementById('amigo');
    let nome = inputElement.value.trim();

    if (!nome) {
        alert('Por favor, escribe un nombre');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Ese nombre ya existe, por favor elige otro');
        return;
    }

    amigos.push(nome);
    console.log(amigos);
    atualizarAmigos();
    limparCampo();
}


function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

// atualizar lista de amigos 
function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li')
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}

// sortear amigos 
function sortearAmigo() {
    if (amigos == [] || amigos.length == 0) {
        alert('Por favor, ingresa tu lista de amigos')
    } else {
        const index = Math.floor(Math.random() * amigos.length)
        const amigoSecreto = amigos[index]

        const ul = document.getElementById('resultado')
        ul.innerHTML = ''

        const li = document.createElement('li')
        li.textContent = `Tu amigo secreto es: ${amigoSecreto}`
        ul.appendChild(li)
    }
}

