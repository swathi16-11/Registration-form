const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    clearErrorMessages();

    let isValid = true;

    // Get form field values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate Username
    if (username === '') {
        displayError('usernameError', 'Username is required.');
        isValid = false;
    } else if (username.length < 3) {
        displayError('usernameError', 'Username must be at least 3 characters long.');
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        displayError('emailError', 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Password
    if (password === '') {
        displayError('passwordError', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }


    if (isValid) {
        // If all validations pass, you can submit the form
        // In a real application, you would send this data to a server
        console.log('Form submitted successfully!');

        // Display success message
        document.getElementById('successMessage').style.display = 'block';
        registrationForm.reset(); // Clear the form
    }
});

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
        element.textContent = '';
        element.style.display = 'none';
    });
    document.getElementById('successMessage').style.display = 'none';
}

function isValidEmail(email) {
    // Simple regex for email validation (can be more robust)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}