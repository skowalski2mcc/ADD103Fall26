// Button Message
const lightButton = document.getElementById('light-button');
const lightMessage = document.getElementById('light-message');

// Light/Dark Mode Toggle
lightButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        lightMessage.textContent = 'The lights are off!';
        lightButton.textContent = 'Turn Lights On';
    } else {
        lightMessage.textContent = 'The lights are on!';
        lightButton.textContent = 'Turn Lights Off';
    }
});
