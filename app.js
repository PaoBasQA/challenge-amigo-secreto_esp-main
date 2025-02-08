// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar el array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista (amigos)
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();  //Elimina espacios en blanco
}

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
// Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (amigos === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

//Actualizar el array de amigos: Si el valor es válido, 
//añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    nombre.push(nombre);

//Limpiar el campo de entrada (input): Después de añadir el nombre, 
// restablecer el campo de texto a una cadena vacía.
    document.getElementById('amigo').value = "";

//investigar listas:
/* Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> 
dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.*/


//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() 
// para seleccionar la lista donde se mostrarán los amigos.

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya 
// duplicados al actualizar.

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos 
// de lista (<li>) para cada título.

//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.