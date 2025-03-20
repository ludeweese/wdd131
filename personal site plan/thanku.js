function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Hide contact details, form, and "Send Me a Message" header after submission
    document.getElementById('contact-details').style.display = 'none';
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('send-message-header').style.display = 'none';

    // Show the Thank You message
    document.getElementById('thank-you-message').style.display = 'block';

    // Optionally reset the form fields if needed (after form submission)
    document.getElementById('contact-form').reset();
}
