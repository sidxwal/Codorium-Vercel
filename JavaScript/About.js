function copyEmail() {
    const email = "siddhantkhandelwal.sde@gmail.com";
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = email;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const emailPopup = document.getElementById("emailPopup");
    emailPopup.innerHTML = "Copied to Clipboard";

    setTimeout(() => {
        emailPopup.innerHTML = "siddhantkhandelwal.sde@gmail.com";
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });
});

document.getElementById('copy-email').addEventListener('click', function () {
    // Copy email to clipboard
    navigator.clipboard.writeText('siddhantkhandelwal.sde@gmail.com').then(function () {
        // Show confirmation message
        let message = document.getElementById('clipboard-message');
        message.classList.add('show');
        setTimeout(() => {
            message.classList.remove('show');
        }, 5000); // Hide after 2 seconds
    }).catch(function () {
        // Error
        alert('Failed to copy email.');
    });
});

// Toggle email popup visibility
document.querySelector('.email-container').addEventListener('click', function () {
    this.classList.toggle('active');
});

// Hide popup when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.email-container')) {
        document.querySelector('.email-container').classList.remove('active');
    }
});

