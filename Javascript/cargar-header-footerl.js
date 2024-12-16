fetch('footer.html')
    .then(response => response.text()) // Convierte la respuesta en texto
    .then(data => {
        const footerContainer = document.getElementById('footer-container');

        // Crear el Shadow DOM
        const shadow = footerContainer.attachShadow({ mode: 'open' });

        // Crear un contenedor para el contenido del footer
        const wrapper = document.createElement('div');
        wrapper.innerHTML = data;

        // Agregar estilos del footer (si están en un archivo separado)
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'Estilos/styles.css'); // Ruta al CSS del footer

        // Insertar contenido y estilos en el Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    })
    .catch(error => console.error('Error al cargar el footer:', error));


    fetch('header.html') // Carga el archivo header.html
    .then(response => response.text()) // Convierte la respuesta a texto
    .then(data => {
        const headerContainer = document.getElementById('header-container');

        // Crear el Shadow DOM
        const shadow = headerContainer.attachShadow({ mode: 'open' });

        // Crear un contenedor para el contenido del header
        const wrapper = document.createElement('div');
        wrapper.innerHTML = data;

        // Agregar estilos del header (si están en un archivo separado)
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'Estilos/styles.css'); // Ruta al CSS del header

        // Insertar contenido y estilos en el Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    })
    .catch(error => console.error('Error al cargar el header:', error));
