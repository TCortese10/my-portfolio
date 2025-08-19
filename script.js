document.addEventListener('DOMContentLoaded', function () {
    const detailButtons = document.querySelectorAll('.details-btn');
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    detailButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const cardContent = button.closest('.project-content');
            const detailDiv = cardContent.querySelector('.project-details');

            modalBody.innerHTML = detailDiv.innerHTML; 
            modal.style.display = 'flex';               
        });
    });

    
    modalClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.documentElement.classList.toggle('dark-mode');

})