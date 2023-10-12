document.addEventListener("DOMContentLoaded", function () {
    const fahrenheitConvertForm = document.getElementById('fahrenheitConvertForm');
    const celcius = document.getElementById('celcius');
    const fahrenheit = document.getElementById('fahrenheit');
    const convertionCelcius = document.getElementById('convertion');
    //const reset = document.getElementById('reset');
    //const reverseCelcius = document.getElementById('reverse');

    //const celciusConvertion = ((fahrenheit/1.8)-32);
    //const fahrenheitConvertion = ((celcius*1.8)+32);

    convertionCelcius.addEventListener("click", function(){
        // Get the input temperature in Fahrenheit
        const celciusVal = parseFloat(celcius.value);
        // Check if the input is a valid number
        if (!isNaN(celciusVal)) {
            // Convert Fahrenheit to Celsius
            const fahrenheitConvertion = ((celciusVal*1.8)+32).toFixed(3);
            // Update the textarea with the result
            fahrenheit.value = `${fahrenheitConvertion} °F`;
        } else {
            // If the input is not a valid number, display an error message
            fahrenheit.value = "Invalid input. Please enter a valid number.";
        }
    });
    fahrenheitConvertForm.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});