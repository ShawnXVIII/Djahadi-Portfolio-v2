document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
    } else {
        // Form submission logic (you can add AJAX request here if needed)
        alert('Form submitted successfully!');
        // Optionally clear the form
        document.getElementById('contact-form').reset();
    }
});
