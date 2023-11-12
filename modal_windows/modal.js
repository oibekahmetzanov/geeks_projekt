
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


// const btnSuccess = document.getElementById("myBtnSuccess");
// const btnFailure = document.getElementById("myBtnFailure");
// const modalSuccess = document.getElementById('myModalSuccess');
// const modalFailure = document.getElementById('myModalFailure');
// const span = document.getElementsByClassName("closeSuccess")[0];

// btnSuccess.onclick = function () {
//     modalSuccess.style.display = "block";
//     modalFailure.style.display = "none";
// }

// btnFailure.onclick = function () {
//     modalFailure.style.display = "block";
//     modalSuccess.style.display = "none";
// }

// span.onclick = function () {
//     modalSuccess.style.display = "none";
//     modalFailure.style.display = "none";
// }

// window.onclick = function (event) {
//     if (event.target == modalSuccess || event.target == modalFailure) {
//         modalSuccess.style.display = "none";
//         modalFailure.style.display = "none";
//     }
// }

// const slideIndex = 1;
// showSlides(slideIndex);
