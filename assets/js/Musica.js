document.addEventListener("DOMContentLoaded", () => {
    let currentIframe = null;

    // 🔹 1. Reproducir video de YouTube al hacer clic en una imagen
    document.querySelectorAll(".card-img-top").forEach(img => {
        img.addEventListener("click", () => {
            const videoId = img.getAttribute("data-id");
            const container = img.parentElement;

            // Si hay un iframe activo, lo quitamos antes de crear uno nuevo
            if (currentIframe) {
                currentIframe.remove();
                currentIframe = null;
            }

            // Crear iframe con autoplay activado
            const iframe = document.createElement("iframe");
            iframe.width = "100%";
            iframe.height = "200";
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            iframe.allow = "autoplay; encrypted-media";
            iframe.frameBorder = "0";

            // Insertar el iframe justo debajo de la imagen
            container.appendChild(iframe);
            currentIframe = iframe;
        });
    });

    // 🔹 2. Pausar cualquier otro video/audio HTML nativo si se usa en la página
    const medias = document.querySelectorAll('video, audio');
    medias.forEach(media => {
        media.addEventListener('play', () => {
            medias.forEach(other => {
                if (other !== media) other.pause();
            });
        });
    });
});

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