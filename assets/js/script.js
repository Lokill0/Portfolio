// SELEZIONE ELEMENTI HTML

const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('.closeModal');
const myForm = document.querySelector('.modal form');

// APERTURA FINESTRA MODALE

openModal.addEventListener('click', () => {
    overlay.style.display = 'block';
});

// CHIUSURA CON IL PULSANTE

closeModal.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// CHIUSURA CLICCANDO SULL'OVERLAY

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});