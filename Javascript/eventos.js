// Asegúrate de que el script de Google Analytics gtag.js esté cargado antes de usarlo
  document.getElementById('enviarButton').addEventListener('click', function() {
    // Enviar el evento a Google Analytics
    gtag('event', 'submit', {
      'event_category': 'Formulario',
      'event_action': 'Enviar',
      'event_label': 'Botón ENVIAR'