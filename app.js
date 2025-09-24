// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];
const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');



// AGREGAR AMIGOS
function agregarAmigo() {
    const amigo = ingresoNombres.value.trim();

    if (amigo === "") {
        alert("Por favor, ingresa el nombre de un amigo");
    } else if (amigos.includes(amigo)) {
        alert("Ese amigo ya fue agregado");
    } else {
        amigos.push(amigo);
        actualizarLista();
    }

    ingresoNombres.value = "";
}

    
    

// actualizar lista 

function actualizarLista() {
    amigoSorteado.innerHTML = "";
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        const liAmigo = document.createElement("li");
        liAmigo.textContent = amigo;
        listaAmigos.appendChild(liAmigo);
    }
}

// SORTEAR AMIGO
function sortearAmigo() {
    if (amigos.length > 0){
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        const liSorteado = document.createElement('li');
        liSorteado.innerHTML = `El amigo secreto es ${amigoSecreto}`; 

        amigoSorteado.appendChild(liSorteado);
    listaAmigos.innerHTML= "";
    // vacio el array para generar una nueva lista
    amigos=[];


}
}