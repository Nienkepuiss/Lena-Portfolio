// Fonction principale qui s'exécute lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Chargement des composants HTML
    loadHTML("#header", "partials/header.html");
    loadHTML("#footer", "partials/footer.html");
  });
  
  /**
   * Charge un fichier HTML partiel et l'insère dans le sélecteur spécifié
   * @param {string} selector - Le sélecteur CSS où insérer le contenu
   * @param {string} file - Le chemin du fichier à charger
   */
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
        
        // Initialiser les fonctionnalités spécifiques après le chargement du header
        if (file === "partials/header.html") {
          initHeaderEffects();
          initMobileMenu();
        }
      })
      .catch(error => console.error(error));
  }
  
  /**
   * Initialise les effets d'apparition/disparition du header lors du défilement
   */
  function initHeaderEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('#header1 .menu');
    const delta = 10; // Seuil minimum pour déclencher les changements
    
    if (!header) return; // Quitter si le header n'existe pas encore
    
    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Vérifier si le défilement a dépassé le seuil
      if (Math.abs(scrollTop - lastScrollTop) > delta) {
        if (scrollTop > lastScrollTop) {
          // Scroll vers le bas - cacher le header
          header.style.top = '-80px';
        } else {
          // Scroll vers le haut - montrer le header
          header.style.top = '0';
        }
        lastScrollTop = scrollTop;
      }
      
      // Assurer que le menu est toujours visible en haut de la page
      if (scrollTop === 0) {
        header.style.top = '0';
      }
    });
  }
  
  /**
   * Initialise le menu mobile et son comportement
   */
  function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!menuToggle || !mobileNav) return; // Quitter si les éléments n'existent pas
    
    // Gestionnaire d'événement pour le bouton hamburger
    menuToggle.addEventListener('click', function() {
      // Toggle active class sur le bouton hamburger et le menu mobile
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
      
      // Empêcher le défilement du body quand le menu est ouvert
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fermer le menu si on clique sur un lien
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Fermer le menu si on redimensionne l'écran au-dessus de 768px
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && mobileNav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }