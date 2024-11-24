// HEADER EFFECT

let lastScrollTop = 0;
const header = document.querySelector('#header .menu');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        header.style.top = '-80px'; 
    } else {
        // Scroll Up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});



document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Créer un observer pour surveiller chaque carte
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe pour l'animation en fondue
                entry.target.classList.add('show');
                // Arrêter d'observer cette carte après l'animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Détecte lorsque 10% de l'élément est visible
    
    // Appliquer l'observateur à chaque carte
    serviceCards.forEach((card, index) => {
        observer.observe(card);
    });
});
