
document.addEventListener('DOMContentLoaded', function () {
    const conteiner = document.querySelector('.conteiner')
    const modalButtons = document.querySelectorAll('.cours_button');
    const closeButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');

    modalButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const modalId = button.id.replace('openModalButton', 'modal');
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                conteiner.style.display = 'none';
                targetModal.style.display = 'block';
                
                
                
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const parentModal = button.closest('.modal');
            if (parentModal) {
                parentModal.style.display = 'none';
                conteiner.style.display = 'block';
            }
        });
    });


});
