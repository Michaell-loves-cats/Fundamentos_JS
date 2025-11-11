// Espera a que todo el documento HTML esté completamente cargado (De: google)
document.addEventListener("DOMContentLoaded", function() {

    // Referencias a los elementos del HTML (De: google)
    const boton = document.getElementById("mostrarBtn");
    const contenido = document.getElementById("contenido");

    // Agrega el evento al botón (De: ChatGPT)
    boton.addEventListener("click", function() {
        // Muestra el contenido (De: ChatGPT)
        contenido.style.display = "block";

        // Oculta el botón (De: Documentación)
        boton.style.display = "none";
    });

});
