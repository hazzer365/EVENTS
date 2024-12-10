// Verifica si la función gtag está disponible
function enviarEventoGA4(evento, categoria, etiqueta) {
    if (typeof gtag === "function") {
        gtag('event', evento, {
            'event_category': categoria,
            'event_label': etiqueta
        });
        console.log(`Evento enviado: ${evento}, Categoría: ${categoria}, Etiqueta: ${etiqueta}`);
    } else {
        console.error("gtag no está definido. Asegúrate de que Google Analytics 4 esté correctamente configurado.");
    }
}

// Evento para clic en el correo
function clicCorreo() {
    enviarEventoGA4('clic', 'Contacto', 'Correo Pontifex');
}

// Evento para clic en WhatsApp
function clicWhatsApp() {
    enviarEventoGA4('clic', 'Contacto', 'WhatsApp Pontifex');
}

// Evento para envío de formulario
function envioFormulario() {
    enviarEventoGA4('Enviar', 'Formulario', 'Botón Enviar');
}

// Asignar eventos a elementos del DOM
document.addEventListener("DOMContentLoaded", () => {
    // Correo
    const enlaceCorreo = document.getElementById("email");
    if (enlaceCorreo) {
        enlaceCorreo.addEventListener("click", clicCorreo);
    }

    // WhatsApp
    const enlaceWhatsApp = document.getElementById("whatsapp");
    if (enlaceWhatsApp) {
        enlaceWhatsApp.addEventListener("click", clicWhatsApp);
    }

    // Botón Enviar
    const botonEnviar = document.getElementById("enviarButton");
    if (botonEnviar) {
        botonEnviar.addEventListener("click", envioFormulario);
    }
});
