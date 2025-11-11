document.addEventListener("DOMContentLoaded", () => {
    // Manejo del elemento que muestra la frase al pasar el ratón (si existe)
    const mostrarBtnEl = document.getElementById("mostrarBtn");
    const textoFalso = "Lo esencial -----------------------";
    const textoReal = "Lo esencial es invisible a los ojos";

    if (mostrarBtnEl) {
        mostrarBtnEl.addEventListener("mouseover", () => {
            mostrarBtnEl.textContent = textoReal;
        });
        mostrarBtnEl.addEventListener("mouseout", () => {
            mostrarBtnEl.textContent = textoFalso;
        });
    }

    // Selecciona todas las tarjetas de película. En tu HTML pueden usar la clase .card o .tarjeta.
    const tarjetas = document.querySelectorAll('.card, .tarjeta');

    if (!tarjetas || tarjetas.length === 0) {
        console.info('No se encontraron tarjetas (.card o .tarjeta) en la página.');
        return;
    }

    tarjetas.forEach((tarjeta, index) => {
        // Buscar elementos internos habituales dentro de la tarjeta
        const img = tarjeta.querySelector('img') || tarjeta.querySelector('.card-img-top');
        const tituloElem = tarjeta.querySelector('.card-title');
        const textoElem = tarjeta.querySelector('.card-text');

        if (!img || !tituloElem || !textoElem) {
            console.warn('Tarjeta ignorada (estructura incompleta):', tarjeta);
            return;
        }

        // Guardar valores originales para restaurar luego
        const original = {
            title: tituloElem.textContent || '',
            text: textoElem.textContent || '',
            imgSrc: img.src || ''
        };

        // Leer valores "reales" desde atributos data-* (ej. data-real-title)
        const realTitle = tarjeta.dataset ? tarjeta.dataset.realTitle : undefined;
        const realText = tarjeta.dataset ? tarjeta.dataset.realText : undefined;
        const realImg = tarjeta.dataset ? tarjeta.dataset.realImg : undefined;

        // Si prefieres mantener un texto "falso" distinto al original, puedes usar data-fake-text o data-fake-title
        const fakeTitle = tarjeta.dataset && tarjeta.dataset.fakeTitle ? tarjeta.dataset.fakeTitle : original.title;
        const fakeText = tarjeta.dataset && tarjeta.dataset.fakeText ? tarjeta.dataset.fakeText : original.text;
        const fakeImg = tarjeta.dataset && tarjeta.dataset.fakeImg ? tarjeta.dataset.fakeImg : original.imgSrc;

        tarjeta.addEventListener('mouseenter', () => {
            // Si no hay nada para mostrar, no hacemos cambios
            if (!realTitle && !realText && !realImg) return;
            if (realTitle) tituloElem.textContent = realTitle;
            if (realText) textoElem.textContent = realText;
            if (realImg) img.src = realImg;
        });

        tarjeta.addEventListener('mouseleave', () => {
            tituloElem.textContent = fakeTitle;
            textoElem.textContent = fakeText;
            if (typeof fakeImg === 'string' && fakeImg.length > 0) img.src = fakeImg;
            else img.src = original.imgSrc;
        });
    });
});
