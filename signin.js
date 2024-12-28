document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.style.display = 'none';
    });

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validate email
    if (!email) {
        showError('emailError', 'Email is required');
        return;
    }
    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email');
        return;
    }

    // Validate password
    if (!password) {
        showError('passwordError', 'Password is required');
        return;
    }
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        return;
    }

    // If validation passes, show success alert and log the form data
    alert('Sign in successful!');
    console.log('Form submitted:', { email, password });
    
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 