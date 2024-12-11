gsap.registerPlugin(ScrollTrigger, TextPlugin);


const textElements = document.querySelectorAll("#typewriter");

textElements.forEach((textElement, index) => {
    const text = textElement.textContent;
    textElement.textContent = "";
  
    gsap.to(textElement, {
      text: text,
      duration: 3 + index, // Augmente la durée pour chaque titre
      delay: index * 0.5, // Ajoute un délai progressif
      ease: "none",
      scrollTrigger: {
        trigger: textElement,
        start: "top 80%",
        toggleActions: "play none none none",
      },
  });
});




