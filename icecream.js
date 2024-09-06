document.addEventListener('DOMContentLoaded', function() {
    // Adding a listener for the form submission
    const paymentForm = document.querySelector('#payment-form');
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        console.log('Form submitted, but page reload prevented.');

        // Display success message below the form
        let successMessage = document.getElementById('success-message');
        
        // If the success message element doesn't exist, create it
        if (!successMessage) {
            successMessage = document.createElement('p');
            successMessage.id = 'success-message';
            successMessage.textContent = 'Payment was successfully completed!';
            successMessage.style.color = 'white'; // Set text color to white
            paymentForm.parentNode.appendChild(successMessage); // Append after the form
        }

        console.log('Success message should now be displayed.');

        // Make sure the success message is displayed
        successMessage.style.display = 'block';

        // Optionally, clear the form fields
        paymentForm.reset();
    });
});
