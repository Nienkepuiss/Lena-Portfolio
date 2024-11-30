
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

