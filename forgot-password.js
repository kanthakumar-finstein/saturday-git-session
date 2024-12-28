// script.js
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a valid email address.');
        emailInput.focus();
    }
});