function toggleModo() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('modo-btn');
    const icon = btn.querySelector('i');
    const textNode = btn.lastChild;

    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.nodeValue = ' Modo oscuro';
        }
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.nodeValue = ' Modo claro';
        }
    }
}

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
document.querySelectorAll('.acordeon-header').forEach(header => {
    header.addEventListener('click', () => {
        const acordeon = header.parentElement;
        acordeon.classList.toggle('activo');
    });
});
// Variable para el botón de modo
const modoBtn = document.getElementById('modo-btn');

// Función para aplicar la preferencia guardada al cargar la página
function cargarModoGuardado() {
    const modoGuardado = localStorage.getItem('modo-oscuro');
    if (modoGuardado === 'true') {
        document.body.classList.add('dark');
        modoBtn.innerHTML = '<i class="fas fa-sun"></i> Modo claro';
    } else {
        document.body.classList.remove('dark');
        modoBtn.innerHTML = '<i class="fas fa-moon"></i> Modo oscuro';
    }
}

// Llama a la función al cargar la página para aplicar el modo guardado
document.addEventListener('DOMContentLoaded', cargarModoGuardado);

// Función para alternar el modo y guardarlo en localStorage
function toggleModo() {
    const isDarkMode = document.body.classList.toggle('dark');
    if (isDarkMode) {
        modoBtn.innerHTML = '<i class="fas fa-sun"></i> Modo claro';
    } else {
        modoBtn.innerHTML = '<i class="fas fa-moon"></i> Modo oscuro';
    }
    // Guarda la preferencia en el almacenamiento local
    localStorage.setItem('modo-oscuro', isDarkMode);
}