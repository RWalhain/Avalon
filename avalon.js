function goToNamePage() {
    const numberInput = document.getElementById('player-count');
    const playerNumber = numberInput.value.trim();

    // Check if the input is not empty, is a number, and is valid
    if (playerNumber === '' || isNaN(playerNumber) || Number(playerNumber) < 5 || Number(playerNumber) > 10) {
        alert('Please enter a valid number between 5 and 10.');
        return; // Prevent moving to the next page
    }

    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('name-page').classList.remove('hidden');

    const container = document.getElementById('text-inputs-container');
    container.innerHTML = ''; // Clear previous inputs, if any

    for (let i = 1; i <= playerNumber; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Player ${i}`;
        input.id = `player-${i}`;
        container.appendChild(input);
        container.appendChild(document.createElement('br')); // Add line breaks
        container.appendChild(document.createElement('br'));
    }
}

function submitNames() {
    const container = document.getElementById('text-inputs-container');
    const inputs = container.querySelectorAll('input[type="text"]');

    const playerArray = Array.from(inputs).map(input => input.value.trim()); // Player names stored in "playerArray"
    
    
    document.getElementById('name-page').classList.add('hidden');
    document.getElementById('extra-roles-page').classList.remove('hidden');
   
}

function assignRoles() {
    // Compile the total roles (default and extra) into an array
    // Assign extra roles (if any) and default roles to all players
    const checkboxes = document.querySelectorAll('#checkbox-form input[type="checkbox"]');
    const selectedExtraRoles = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    for (let i = 1; i <= playerNumber; i++) {
        
    }

    document.getElementById('extra-roles-page').classList.add('hidden');
    document.getElementById('reveal-prompt-page').classList.remove('hidden');
}

function readyToReveal() {

    document.getElementById('reveal-prompt-page').classList.add('hidden');
    document.getElementById('reveal-roles-page').classList.remove('hidden');
}