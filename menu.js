// Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Função para alternar o menu
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    }

    // Adiciona evento de clique ao botão do menu
    menuToggle.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Ajusta o menu quando a janela é redimensionada
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && menu && menu.classList.contains('active')) {
                toggleMenu();
            }
        }, 250);
    });

    // Fecha o menu com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menu && menu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Previne o scroll do body quando o menu está aberto
    if (menu) {
        menu.addEventListener('touchmove', function(event) {
            if (menu.classList.contains('active')) {
                event.preventDefault();
            }
        }, { passive: false });
    }
}); 