import { participantTemplate } from "./Templates.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const participantsDiv = document.getElementById("participants");
    const addParticipantBtn = document.getElementById("addParticipant");
    const summaryDiv = document.getElementById("summary");
    const container = document.querySelector(".container"); 

    let participantCount = 1;

    addParticipantBtn.addEventListener("click", function () {
        participantCount++;
        participantsDiv.insertAdjacentHTML("beforeend", participantTemplate(participantCount));
    });

    function totalFees() {
        let feeElements = [...document.querySelectorAll("[name^=fee]")];
        return feeElements.reduce((total, input) => total + (parseFloat(input.value) || 0), 0);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const adultName = document.getElementById("adultName").value.trim() || "Participant";
        const totalFee = totalFees();

        summaryDiv.innerHTML = `
            <strong>Registration Successful!</strong><br>
            Thank you, ${adultName}, for registering.<br>
            You have registered ${participantCount} participant${participantCount > 1 ? "s" : ""}.<br>
            Total fees: <strong>$${totalFee}</strong>
        `;

        form.style.display = "none"; // Hides form
        container.style.display = "none"; // Hides instructions
        summaryDiv.style.display = "block"; // Shows summary message
    });
});
