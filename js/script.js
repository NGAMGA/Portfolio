console.log("Portfolio chargé avec succès");

// Animations au scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
});

window.addEventListener('load', () => {
    document.querySelectorAll('.animate').forEach(el => {
        el.classList.add('show');
    });
});
