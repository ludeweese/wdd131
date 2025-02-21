// form-demo.js
// Get form and elements
const form = document.getElementById("checkoutForm");
const paymentMethod = document.getElementById("paymentMethod");
const creditCardContainer = document.getElementById("creditCardContainer");
const paypalContainer = document.getElementById("paypalContainer");

// Hide payment details initially
creditCardContainer.classList.add("hide");
paypalContainer.classList.add("hide");

// Function to show/hide payment details and handle required attributes 
function togglePaymentDetails() {
  const theForm = document.querySelector("#checkoutForm");

  // Hide payment containers
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // Disable required for the hidden fields
  theForm.creditCard.required = false;
  theForm.paypalUsername.required = false;

  // Show the container based on the selected payment method
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCard.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// Validate form
function validateForm(event) {
  let errors = [];

  // Custom validation for "Full Name" - only allow "Bob"
  const fullName = form.fullName.value;
  if (fullName !== "Bob") {
    errors.push("Only 'Bob' can submit this form.");
  }

  // Custom validation for Credit Card Number - only allow a specific card number
  const creditCardNumber = form.creditCard.value;
  if (creditCardNumber && creditCardNumber !== "1234123412341234") {
    errors.push("Invalid credit card number.");
  }

  // Check if the form is valid (HTML5 validation)
  if (!form.checkValidity()) {
    errors.push("Please fill in all required fields correctly.");
  }

  // If there are errors, prevent form submission and display errors
  if (errors.length > 0) {
    event.preventDefault();
    const errorContainer = document.querySelector(".errors");

    // Clear previous errors
    errorContainer.innerHTML = "";

    // Display new error messages
    errors.forEach(error => {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = error;
      errorContainer.appendChild(errorParagraph);
    });
  }
}

// Event listeners
paymentMethod.addEventListener("change", togglePaymentDetails);
form.addEventListener("submit", validateForm);
