document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});
