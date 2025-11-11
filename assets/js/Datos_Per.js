const nombre = "Jeaneth Mishell";
const apellido = "Benavides Hurtado";
const direccion = "Cra 19B n° 12-39";
const telefono = "3127850073";
const correo = "Jeaneth.benavides@soy.sena.edu.co";

//Primero hay que declarar variables.

document.getElementById("mostrar").addEventListener("click", function() {
    //Luego, se crea un evento al hacer clic en el botón.
    document.getElementById("info").innerHTML = `
    
    <div class="card w-50 mx-auto">
        <div class="card-body">
            <p>⋯⋯⋯ ⊰ ᯽ ⊱ ⋯⋯⋯</p>
            <h5 class="card-title text-primary">Datos personales</h5>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Correo:</strong> ${correo}</p>
        </div>
    </div>
    `;
    boton.style.display = "none";
});

// Usar interpolación de variables con ${variable}.
//interpolación significa insertar el valor de una variable dentro de una cadena de texto.
//const	Declara una constante (su valor no cambia).
//=	Asigna un valor a una variable o constante.
//document	Representa todo el documento HTML.
//getElementById()	Busca un elemento por su ID en el HTML.
//addEventListener()	Escucha eventos (clic, mouseover, etc.).
//function() {}	Bloque de código que se ejecuta cuando se activa el evento.
//` `	Comillas invertidas: permiten texto multilínea e insertar HTML o variables.
//innerHTML	Propiedad que cambia o lee el contenido HTML de un elemento.
//style.display	Cambia cómo se muestra un elemento (block, none, etc.).
//;	Indica el fin de una instrucción.