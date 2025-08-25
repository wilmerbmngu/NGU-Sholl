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