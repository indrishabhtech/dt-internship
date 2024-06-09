document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const span = document.getElementsByClassName('close')[0];
    const projectDetails = document.getElementById('project-details');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const project = this.closest('.project').dataset.project;
            showModal(project);
        });
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    function showModal(project) {
        projectDetails.textContent = `Details of Project ${project}`;
        modal.style.display = 'block';
    }

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
