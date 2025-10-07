const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});