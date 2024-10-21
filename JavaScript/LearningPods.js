document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    // Modal for Suggestions
    const modal = document.createElement('div');
    modal.id = 'suggestions-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <iframe src="https://forms.gle/VP6QHLjyPushutcu8" frameborder="0"></iframe>
        </div>
    `;
    document.body.appendChild(modal);

    const openModal = () => {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show-modal');
        }, 50); // Delay added for smoother transition
    };

    const closeModal = () => {
        modal.classList.remove('show-modal');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Adjust the delay to match your transition duration
    };


    document.querySelector('#page7-right a').addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    document.querySelector('.close-button').addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();

        }
    });
    // Back to Top functionality
    const backToTopButton = document.getElementById("backToTop");
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    
});
