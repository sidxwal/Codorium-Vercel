document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to update counters
    const updateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let c = +counter.innerText.replace(/[^\d.-]/g, ''); // Removes any non-numeric characters

        let increment;
        let duration;

        if (target === 5400000 || target === 850000) {
            increment = target / 200;
            duration = 5;
        } else if (target === 7.5 || target === 5.8) {
            increment = target / 100;
            duration = 50;
        } else if (target === 245) {
            increment = target / 100;
            duration = 10;
        } else {
            increment = target / 100;
            duration = 20;
        }

        if (c < target) {
            c = Math.ceil(c + increment);
            counter.innerText = target === 7.5 || target === 5.8 || target === 75 ? `${c}%` : c.toLocaleString();
            setTimeout(() => updateCounter(counter), duration);
        } else {
            if (target === 5400000) {
                counter.innerText = '5.4 Million';
            } else if (target === 245) {
                counter.innerText = '$245 Billion';
            } else if (target === 850000) {
                counter.innerText = '8.5 LPA';
            } else if (target === 7.5 || target === 5.8 || target === 75) {
                counter.innerText = `${target}%`;
            } else {
                counter.innerText = target.toLocaleString();
            }
        }
    };

    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    // Observer to start counters when page 3 is in view
    const page3 = document.querySelector('#page3');
    const counters = document.querySelectorAll('.info-divs h1');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    counter.innerText = '0'; // Reset the counter text
                    updateCounter(counter);
                });
                observer.unobserve(page3); // Stop observing once counters start
            }
        });
    }, { threshold: 0.1 });

    observer.observe(page3);

    // Modal for Suggestions
    const modal = document.createElement('div');
    modal.id = 'suggestions-modal';
    modal.innerHTML = `
        <div class="modal-content" class="custom-scrollbar">
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


    document.querySelector('#page5-right a').addEventListener('click', (e) => {
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

