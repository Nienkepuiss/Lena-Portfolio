// HEADER EFFECT

let lastScrollTop = 0;
const header = document.querySelector('#header1 .menu');

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

// MOBILE MENU

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".menu ul.nav");
  
    // Gestion du menu toggle
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("rotate"); // Ajoute l'effet de rotation
      navMenu.classList.toggle("show"); // Affiche ou masque le menu
    });
  
    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("rotate");
        navMenu.classList.remove("show");
      });
    });
  
    // Ajouter la classe "active" en fonction de la page actuelle
    const currentPath = window.location.pathname; // Chemin de l'URL actuelle
    const currentHash = window.location.hash; // Hash de l'URL (ex: #contact)
  
    navLinks.forEach((link) => {
      // Vérifie si le href du lien correspond au chemin ou au hash actuel
      if (
        link.getAttribute("href") === currentPath || // Chemin exact
        link.getAttribute("href") === currentHash // Hash exact
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
});
  

// SMOOTH BANNER EFFECT

document.addEventListener('DOMContentLoaded', function() {
    var bannerContent = document.querySelector('.banner-content');

    bannerContent.classList.add('show');
});

//  ABOUT EFFECT

document.addEventListener("DOMContentLoaded", function() {
      const cards = document.querySelectorAll('.about-card');
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  cards.forEach((card, index) => {
                      setTimeout(() => {
                          card.classList.add('show');
                      }, index * 600); 
                  });
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });
  
      observer.observe(document.querySelector('.about-card-container'));
});
   
// SERVICES EFFECT

document.addEventListener("DOMContentLoaded", function() {
  const prestaCards = document.querySelectorAll('.prestations-card-container');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              prestaCards.forEach((card, index) => {
                  setTimeout(() => {
                      card.classList.add('show');
                  }, index * 600); 
              });
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  observer.observe(document.querySelector('.prestations-section'));
});

