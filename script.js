document.addEventListener('DOMContentLoaded', function () {
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const cardContent = button.closest('.project-content');
            const detailDiv = cardContent.querySelector('.project-details');
            if (detailDiv.style.display === 'none' || !detailDiv.style.display) {
                detailDiv.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                detailDiv.style.display = 'none';
                button.textContent = 'Show Details';
            }
        });
    });
});