    document.addEventListener("DOMContentLoaded", function () {
        const fahrenheitConvertForm = document.getElementById('fahrenheitConvertForm');
        const celciusConvertForm = document.getElementById('celciusConvertForm')
        
        const celcius = document.getElementById('celcius');
        const fahrenheit = document.getElementById('fahrenheit');
        
        const convertionCelcius = document.getElementById('convertion');
        const resetValue = document.getElementById('reset');
        const reverseCelcius = document.getElementById('reverseCelcius');
        
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
        reverseCelcius.addEventListener("click", function(){
            // Get the input temperature in Fahrenheit
            const fahrenheitVal = parseFloat(fahrenheit.value);
            // Check if the input is a valid number
            if (!isNaN(fahrenheitVal)) {
                // Convert Fahrenheit to Celsius
                const celciusConvertion = ((fahrenheitVal-32)/1.8).toFixed(3);
                // Update the textarea with the result
                celcius.value = `${celciusConvertion} °C`;
            } else {
                // If the input is not a valid number, display an error message
                celcius.value = "Invalid input. Please enter a valid number.";
            }
        });

        resetValue.addEventListener("click", function(){
            // Get the input temperature in Fahrenheit
            celcius.value = null
            fahrenheit.value = null
        });

        const celciusRev = document.getElementById('celciusReverse');
        const fahrenheitRev = document.getElementById('fahrenheitReverse');
        const convertionFahrenheit = document.getElementById('convertFahrenheit');
        const reverseFahrenheit = document.getElementById('reversefahrenheit');
        
        convertionFahrenheit.addEventListener("click", function(){
            // Get the input temperature in Fahrenheit
            const fahrenheitVal = parseFloat(fahrenheitRev.value);
            // Check if the input is a valid number
            if (!isNaN(fahrenheitVal)) {
                // Convert Fahrenheit to Celsius
                const celciusConvertion = ((fahrenheitVal-32)/1.8).toFixed(3);
                // Update the textarea with the result
                celciusRev.value = `${celciusConvertion} °C`;
            } else {
                // If the input is not a valid number, display an error message
                celciusRev.value = "Invalid input. Please enter a valid number.";
            }
        });
        reverseFahrenheit.addEventListener("click", function(){
            // Get the input temperature in Fahrenheit
            const celciusVal = parseFloat(celciusRev.value);
            // Check if the input is a valid number
            if (!isNaN(celciusVal)) {
                // Convert Fahrenheit to Celsius
                const fahrenheitConvertion = ((celciusVal*1.8)+32).toFixed(3);
                // Update the textarea with the result
                fahrenheitRev.value = `${fahrenheitConvertion} °F`;
            } else {
                // If the input is not a valid number, display an error message
                fahrenheitRev.value = "Invalid input. Please enter a valid number.";
            }
        });
        fahrenheitConvertForm.addEventListener("submit", function (e) {
            e.preventDefault();
        });
        celciusConvertForm.addEventListener("submit", function (e) {
            e.preventDefault();
        });
    });