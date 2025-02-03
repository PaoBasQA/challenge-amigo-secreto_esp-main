// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados
let amigos = [];

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector 
// para obtener el texto ingresado por el usuario.

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //no hace nada, solo finaliza la función.
}

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
// Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

if (amigos === "") {
    alert("Por favor, inserte un nombre.");
    return;
}
