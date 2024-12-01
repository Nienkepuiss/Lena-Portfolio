function loadHTML(selector, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur : Impossible de charger ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;

            // Appeler les fonctions après avoir chargé le header
            if (file === "partials/header.html") {
                initHeaderEffects(); // Initialiser les effets liés au header
                initMobileMenu(); // Initialiser le menu mobile
            }
        })
        .catch(error => console.error(error));
}

// Charger le header et le footer
loadHTML("#header", "partials/header.html");
loadHTML("#footer", "partials/footer.html");

// HEADER EFFECT
function initHeaderEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('#header1 .menu'); // Assurez-vous que ce sélecteur existe dans votre HTML
    const delta = 10; // Seuil minimum pour déclencher les changements

    if (!header) return; // Si le header n'existe pas encore, quittez la fonction

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Vérifiez si le défilement a dépassé le seuil
        if (Math.abs(scrollTop - lastScrollTop) > delta) {
            if (scrollTop > lastScrollTop) {
                // Scroll vers le bas
                header.style.top = '-80px';
            } else {
                // Scroll vers le haut
                header.style.top = '0';
            }
            lastScrollTop = scrollTop;
        }

        // Assurez-vous que le menu est toujours visible en haut de la page
        if (scrollTop === 0) {
            header.style.top = '0';
        }
    });
}


// MOBILE MENU
function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle"); // Le bouton hamburger
    const navMenu = document.querySelector(".menu ul.nav"); // Le menu de navigation
    const navLinks = document.querySelectorAll(".nav-link"); // Tous les liens du menu

    // Vérifier si les éléments existent
    if (!menuToggle || !navMenu || !navLinks.length) {
        console.warn("Éléments de navigation manquants.");
        return;
    }

    // Gestion de l'ouverture/fermeture du menu
    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("rotate");
        navMenu.classList.toggle("show");
    });

    // Gestion des clics sur les liens
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Fermer le menu après un clic sur un lien (utile pour mobile)
            menuToggle.classList.remove("rotate");
            navMenu.classList.remove("show");

            // Supprimer "active" de tous les liens
            navLinks.forEach((l) => l.classList.remove("active"));
            // Ajouter "active" au lien cliqué
            this.classList.add("active");
        });
    });

    // Ajouter automatiquement "active" selon l'URL actuelle
    const currentPath = window.location.pathname; // Chemin actuel (ex: "/about.html")
    const currentHash = window.location.hash; // Hash actuel (ex: "#contact")

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        // Comparer avec le chemin ou le hash actuels
        if (currentPath.includes(href) || currentHash === href) {
            link.classList.add("active");
        }
        
    });
}

// Initialisation après le chargement complet du DOM
document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
});
