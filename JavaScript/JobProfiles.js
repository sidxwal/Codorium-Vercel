document.addEventListener("DOMContentLoaded", function () {
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
    
    // Modal functionality
    const modal = document.getElementById("infoModal");
    const closeBtn = document.querySelector(".close-btn");
    const articleFrame = document.getElementById("articleFrame");

    document.querySelectorAll(".more-info-btn").forEach(button => {
        button.addEventListener("click", function () {
            const articleLink = this.getAttribute("data-article-link");
            articleFrame.src = encodeURI(articleLink);
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        articleFrame.src = ""; // Clear the iframe content
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            articleFrame.src = ""; // Clear the iframe content
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