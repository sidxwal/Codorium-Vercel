document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    // Page 2 Roadmap
    const stepsPage2 = document.querySelectorAll('#page2 .step');

    stepsPage2.forEach((step, index) => {
        step.addEventListener('click', () => {
            step.classList.toggle('completed');
            updateProgressBarPage2();
        });
    });

    function updateProgressBarPage2() {
        const totalSteps = stepsPage2.length;
        const completedSteps = document.querySelectorAll('#page2 .completed').length;
        const progressPercent = (completedSteps / totalSteps) * 100;

        document.getElementById('progress-bar-page2').style.width = `${progressPercent}%`;
        document.getElementById('progress-text-page2').textContent = `Progress: ${progressPercent.toFixed(2)}%`;
    }

    // Page 3 Roadmap
    const stepsPage3 = document.querySelectorAll('#page3 .step');

    stepsPage3.forEach((step, index) => {
        step.addEventListener('click', () => {
            step.classList.toggle('completed');
            updateProgressBarPage3();
        });
    });

    function updateProgressBarPage3() {
        const totalSteps = stepsPage3.length;
        const completedSteps = document.querySelectorAll('#page3 .completed').length;
        const progressPercent = (completedSteps / totalSteps) * 100;

        document.getElementById('progress-bar-page3').style.width = `${progressPercent}%`;
        document.getElementById('progress-text-page3').textContent = `Progress: ${progressPercent.toFixed(2)}%`;
    }

    // Page 4 Roadmap
    const stepsPage4 = document.querySelectorAll('#page4 .step');

    stepsPage4.forEach((step, index) => {
        step.addEventListener('click', () => {
            step.classList.toggle('completed');
            updateProgressBarPage4();
        });
    });

    function updateProgressBarPage4() {
        const totalSteps = stepsPage4.length;
        const completedSteps = document.querySelectorAll('#page4 .completed').length;
        const progressPercent = (completedSteps / totalSteps) * 100;

        document.getElementById('progress-bar-page4').style.width = `${progressPercent}%`;
        document.getElementById('progress-text-page4').textContent = `Progress: ${progressPercent.toFixed(2)}%`;
    }

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


// JavaScript to adjust HTML for responsiveness
function adjustLayoutForMobile() {
    if (window.innerWidth < 600) {
        // Example of adjusting the layout for mobile
        const stepContainers = document.querySelectorAll('.step-container');

        stepContainers.forEach(container => {
            // Move text box to be below the step circle
            const step = container.querySelector('.step');
            const textBox = container.querySelector('.text-box');

            container.appendChild(step); // Ensure step is added first
            container.appendChild(textBox); // Ensure text box is below
        });
    } else {
        // Optional: Reset layout for larger screens if needed
    }
}

// Initial layout adjustment
adjustLayoutForMobile();

// Adjust layout on window resize
window.addEventListener('resize', adjustLayoutForMobile);
