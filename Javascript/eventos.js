
// Asegúrate de que el código de seguimiento de Google Analytics ya está implementado en tu HTML

// Esperamos a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
  // Evento para el campo de email
  const emailElement = document.getElementById('email');
  if (emailElement) {
    emailElement.addEventListener('focus', function() {
      gtag('event', 'focus', {
        'event_category': 'Formulario',
        'event_label': 'Email'
      });
    });
  }

  // Evento para el campo de whatsapp
  const whatsappElement = document.getElementById('whatsapp');
  if (whatsappElement) {
    whatsappElement.addEventListener('focus', function() {
      gtag('event', 'focus', {
        'event_category': 'Formulario',
        'event_label': 'Whatsapp'
      });
    });
  }

  // Evento para el campo de teléfono
  const telefonoElement = document.getElementById('telefono');
  if (telefonoElement) {
    telefonoElement.addEventListener('focus', function() {
      gtag('event', 'focus', {
        'event_category': 'Formulario',
        'event_label': 'Telefono'
      });
    });
  }

  // Evento para el botón de enviar
  const enviarButton = document.getElementById('enviarButton');
  if (enviarButton) {
    enviarButton.addEventListener('click', function() {
      gtag('event', 'click', {
        'event_category': 'Formulario',
        'event_label': 'Botón Enviar'
      });
    });
  }
});
