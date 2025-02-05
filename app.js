// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar el array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar amigos
    function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();  //Elimina espacios en blanco
}

/*function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //no hace nada, solo finaliza la función.
}*/

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
// Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
if (amigos === "") {
    alert("Por favor, inserte un nombre.");
    return;
}

//Actualizar el array de amigos: Si el valor es válido, 
//añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
amigos.push(nombre);

