document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const contentContainer = document.getElementById("main-content");

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const contentText = this.textContent.trim();
            contentContainer.innerHTML = "You clicked on " + contentText + ".";
        });
    });
});
