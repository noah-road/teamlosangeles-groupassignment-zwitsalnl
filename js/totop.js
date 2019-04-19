const scroll = document.querySelector('.scroll');
scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});