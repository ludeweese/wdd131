document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".credit-card-form-grid");

    // Auto-format card number input (adds spaces every 4 digits)
    document.getElementById("card-number").addEventListener("input", function (e) {
        let value = this.value.replace(/\D/g, ""); // Remove non-numeric characters
        value = value.replace(/(\d{4})/g, "$1 ").trim(); // Add spaces every 4 digits
        this.value = value.substring(0, 19); // Limit to 19 characters (16 digits + 3 spaces)
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent submission if there are errors

        let isValid = true;
        let errorMessages = [];

        // Get form elements
        const cardNumber = document.getElementById("card-number");
        const cardName = document.getElementById("card-name");
        const expiryMM = document.getElementById("expiry-mm");
        const expiryYY = document.getElementById("expiry-yy");
        const cvv = document.getElementById("cvv-back");

        // Regular expressions for validation
        const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
        const expiryPattern = /^\d{2}$/;
        const cvvPattern = /^\d{3}$/;

        // Validation checks
        if (!cardNumberPattern.test(cardNumber.value)) {
            isValid = false;
            errorMessages.push("Please enter a valid card number in the format: 1234 5678 9101 1020");
        }

        if (cardName.value.trim() === "") {
            isValid = false;
            errorMessages.push("Cardholder name cannot be empty.");
        }

        const expiryMonth = parseInt(expiryMM.value, 10);
        if (!expiryPattern.test(expiryMM.value) || expiryMonth < 1 || expiryMonth > 12) {
            isValid = false;
            errorMessages.push("Please enter a valid expiration month (01-12).");
        }

        const expiryYear = parseInt(expiryYY.value, 10);
        const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
        if (!expiryPattern.test(expiryYY.value) || expiryYear < currentYear) {
            isValid = false;
            errorMessages.push(`Please enter a valid expiration year (>= ${currentYear}).`);
        }

        if (!cvvPattern.test(cvv.value)) {
            isValid = false;
            errorMessages.push("Please enter a valid 3-digit CVC.");
        }

        // Show all errors at once
        if (!isValid) {
            alert(errorMessages.join("\n"));
            return;
        }

        // If all fields are valid, allow form submission
        alert("Form submitted successfully!");
        form.submit(); 
    });
});
