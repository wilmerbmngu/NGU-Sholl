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
/* --- Funcionalidad de Audio (Text-to-Speech) --- */

// 1. Buscamos todos los botones de audio en la página
const audioButtons = document.querySelectorAll('.btn-audio');

// 2. A cada botón le agregamos una función cuando se le hace clic
audioButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // A. Encontramos la palabra en inglés dentro de la misma tarjeta
        // El botón está dentro de un div, buscamos el hermano que tiene la clase .ingles
        const card = button.parentElement;
        const textToSpeak = card.querySelector('.ingles').textContent;

        // B. Preparamos la voz del navegador
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        // C. Configuración (Idioma y Velocidad)
        utterance.lang = 'en-US'; // Inglés de Estados Unidos
        utterance.rate = 0.8;     // Un poquito más lento para que se entienda bien
        utterance.pitch = 1;      // Tono normal

        // D. ¡Habla!
        window.speechSynthesis.speak(utterance);

        // E. Pequeña animación visual (el botón se encoge un poco al pulsar)
        button.style.transform = "scale(0.9)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 200);
    });
});