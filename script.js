
document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    let displayValue = '';

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let buttonText = e.target.innerText;

            if (buttonText === 'AC') {
                displayValue = ''; // Clear the display
            } else if (buttonText === 'DEL') {
                displayValue = displayValue.slice(0, -1); // Delete the last character
            } else if (buttonText === '=') {
                try {
                    displayValue = eval(displayValue); // Calculate the result
                } catch (error) {
                    displayValue = 'Error'; // Display error on invalid input
                }
            } else if (buttonText === '%') {
                displayValue = displayValue / 100; // Convert to percentage
            } else if (buttonText === '.') {
                if (!displayValue.includes('.')) {
                    displayValue += buttonText; // Add a decimal point if not already present
                }
            } else {
                displayValue += buttonText; // Add the button text to the display value
            }

            display.value = displayValue; // Update the display
        });
    });
});




