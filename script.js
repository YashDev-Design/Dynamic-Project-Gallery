const taskButtons = document.querySelectorAll('.task-button');
const popupMessage = document.getElementById('popup-message');
const goCheckItButton = document.getElementById('go-check-it');
const displayArea = document.getElementById('display-area');
const navbar = document.getElementById('navbar');
const navbarContent = document.getElementById('navbar-content');

taskButtons.forEach(button => {
    button.addEventListener('click', () => {
        navbar.classList.remove('open'); // Close navbar when task button is clicked

        // Reset display area smoothly
        displayArea.style.opacity = '0';

        setTimeout(() => {
            displayArea.innerHTML = '<div class="default-message">Click a Task to display it here.</div>';
            displayArea.style.opacity = '1';
        }, 300);

        // Update popup content
        const description = button.getAttribute('data-description');
        document.getElementById('popup-message-text').innerText = description;

        // Show the popup message
        popupMessage.classList.add('active');

        // Remove previous event listeners to avoid stacking
        goCheckItButton.replaceWith(goCheckItButton.cloneNode(true));
        const newGoCheckItButton = document.getElementById('go-check-it');

        // Set ARIA attributes for accessibility
        taskButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
        button.setAttribute('aria-expanded', 'true');

        newGoCheckItButton.addEventListener('click', () => {
            // Hide the popup and show the task content
            popupMessage.classList.remove('active');
            const taskName = button.dataset.task;

            displayArea.style.opacity = '0';
            setTimeout(() => {
                displayArea.innerHTML = `<iframe src="works/${taskName}/index.html" width="100%" height="100%"></iframe>`;
                displayArea.style.opacity = '1';
            }, 300);

            // Close the navbar with a slight delay
            setTimeout(() => {
                navbar.classList.remove('open');
            }, 500);
        });
    });
});

// Handle the collapse and expansion of the navbar with smooth animation
function toggleNavbar() {
    navbar.classList.toggle('open');
}