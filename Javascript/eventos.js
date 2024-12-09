document.getElementById('enviarButton').addEventListener('click', function() {
  gtag('event', 'submit', {
    'event_category': 'Formulario',
    'event_action': 'Enviar',
    'event_label': 'Botón ENVIAR'
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const whatsappLink = document.getElementById("whatsapp");

    // Verificar si el enlace existe antes de agregar el evento
    if (whatsappLink) {
        whatsappLink.addEventListener("click", function (event) {
            // Enviar evento a Google Analytics
            if (typeof gtag !== "undefined") {
                gtag("event", "click", {
                    event_category: "Contacto",
                    event_label: "Click en WhatsApp",
                    transport_type: "beacon"
                });
            }

            // Asegurarse de que el enlace se abra correctamente en otra pestaña
            window.open(whatsappLink.href, "_blank");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const googleMapsLink = document.getElementById("google-maps");

    // Verificar si el enlace existe antes de agregar el evento
    if (googleMapsLink) {
        googleMapsLink.addEventListener("click", function (event) {
            // Enviar evento a Google Analytics
            if (typeof gtag !== "undefined") {
                gtag("event", "click", {
                    event_category: "Ubicación",
                    event_label: "Click en Google Maps",
                    transport_type: "beacon"
                });
            }

            // Asegurarse de que el enlace se abra correctamente en otra pestaña
            window.open(googleMapsLink.href, "_blank");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el enlace de correo
    const emailLink = document.getElementById("correo");

    // Verificar si el enlace existe antes de agregar el evento
    if (emailLink) {
        emailLink.addEventListener("click", function (event) {
            // Enviar evento a Google Analytics
            if (typeof gtag !== "undefined") {
                gtag("event", "click", {
                    event_category: "Contacto",
                    event_label: "Click en Correo",
                    event_action: "Email"
                });
            }
        });
    }
});

