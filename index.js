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

// MOBILE MENU

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector(".nav");
  
    menuToggle.addEventListener("click", () => {
      const isVisible = nav.getAttribute("data-visible") === "true";
  
      // Basculer la visibilité du menu
      nav.setAttribute("data-visible", !isVisible);
  
      // Ajouter ou retirer la classe de rotation
      if (isVisible) {
        menuToggle.classList.remove("rotated");
      } else {
        menuToggle.classList.add("rotated");
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

