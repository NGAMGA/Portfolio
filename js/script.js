document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio chargé avec succès");

    const reveal = () => {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Déclenche l'animation si l'élément est visible ou déjà en haut de page
            if(rect.top < window.innerHeight - 50 || rect.top < 100) {
                el.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Appel immédiat pour les éléments déjà visibles (ex: Accueil)
});
