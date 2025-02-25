export function participantTemplate(count) {
    return `
        <div class="participant" id="participant${count}">
            <label for="participantName${count}">Participant ${count}:</label>
            <input type="text" id="participantName${count}" name="participantName${count}" required>
            <label for="fee${count}">Fee ($):</label>
            <input type="number" id="fee${count}" name="fee${count}" min="0" required>
        </div>
    `;
}
