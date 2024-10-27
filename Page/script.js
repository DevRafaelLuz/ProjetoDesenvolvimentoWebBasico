const menu = document.querySelectorAll('nav a');

menu.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const alvo = document.querySelector(href);

        if (alvo) {
            window.scroll({
                top: alvo.offsetTop -20,
                behavior: 'smooth'
            });
        }
    });
});