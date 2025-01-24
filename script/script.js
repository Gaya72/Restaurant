document.addEventListener('DOMContentLoaded', function () {
    // Gestion de la barre de navigation
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    if (toggleButton && navbarMenu) {
        toggleButton.addEventListener('click', () => {
            navbarMenu.classList.toggle('collapse');
        });

        // Fermer le menu lorsqu'un lien est cliqué
        const navLinks = navbarMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.add('collapse');
            });
        });
    }

    // Validation du formulaire d'abonnement
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const emailInput = document.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!email) {
                    alert('Veuillez entrer votre adresse e-mail !');
                    event.preventDefault(); // Empêche l'envoi du formulaire
                } else if (!emailRegex.test(email)) {
                    alert('Veuillez entrer une adresse e-mail valide !');
                    event.preventDefault(); // Empêche l'envoi si l'e-mail est invalide
                } else {
                    // Affiche un message de succès
                    event.preventDefault(); // Pour la démonstration, on empêche l'envoi
                    alert('Merci pour votre inscription à notre newsletter !');
                    emailInput.value = ''; // Vide le champ d'e-mail
                }
            }
        });
    }
});
