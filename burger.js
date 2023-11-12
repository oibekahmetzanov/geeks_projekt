document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger_svg');
    const slideMenu = document.querySelector('.slide-menu');
    const closeBtn = document.querySelector('.close-btn');
   

    burgerMenu.addEventListener('click', function () {
        slideMenu.classList.add('show');
      
    });

    closeBtn.addEventListener('click', function () {
        slideMenu.classList.remove('show');
    });
});