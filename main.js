// Seleziona il pulsante
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostra il pulsante quando si scorre verso il basso
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block'; // Mostra il pulsante
    } else {
        scrollToTopBtn.style.display = 'none'; // Nasconde il pulsante
    }
});

// Aggiungi un evento click al pulsante
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll dolce
    });
});

// Seleziona la navbar
const header = document.querySelector('.header');

// Aggiungi una classe alla navbar quando l'utente scorre verso il basso
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Mostra effetti dopo aver scrolled di 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

