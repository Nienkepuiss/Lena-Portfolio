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


// FONCTIONS POUR OUVRIR ET FERMER LA MODALE
function toggleModale(modaleId, isOpen) {
    const modale = document.getElementById(modaleId);
    modale.style.display = isOpen ? 'flex' : 'none';
    modale.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }
  
  // AJOUT DES ÉCOUTEURS POUR OUVRIR LA MODALE
  document.querySelectorAll('.btn-tarifs').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const modaleId = this.getAttribute('href').substring(1);
      toggleModale(modaleId, true);
    });
  });
  
  // AJOUT DES ÉCOUTEURS POUR FERMER LA MODALE
  document.querySelectorAll('#close-modale').forEach(button => {
    button.addEventListener('click', function () {
      const modale = this.closest('aside'); // Trouve l'élément parent <aside>
      toggleModale(modale.id, false);
    });
  });
  
  // AJOUT D'UN EFFET DE CLIC SUR LES BOUTONS (OPTIONNEL)
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn-primary').forEach(button => {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
        button.classList.add('clicked');
      });
    });
  });
  

  