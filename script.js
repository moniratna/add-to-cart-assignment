function toggleBox(boxId) {
	// Get the event target
	const event = window.event;

	// Prevent toggle if the clicked element is a select dropdown or any other interactive element
	if (event.target.tagName === "SELECT" || event.target.tagName === "OPTION") {
		return;
	}
	const box = document.getElementById(boxId);
	box.classList.toggle("expanded");

	// Deselect all radio buttons
	const allRadioButtons = document.querySelectorAll('input[name="toggle"]');
	allRadioButtons.forEach((radio) => (radio.checked = false));

	// Select the radio buttons within the clicked box
	const radioButtons = document.querySelectorAll(
		`#${boxId} input[name="toggle"]`
	);
	radioButtons.forEach((radio) => (radio.checked = true));
}
