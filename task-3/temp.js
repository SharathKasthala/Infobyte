function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var resultUnit;

    if (unit === "celsius") {
        convertedTemperature = (temperature * 9 / 5) + 32;
        resultUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5 / 9;
        resultUnit = "Celsius";
    } else if (unit === "kelvin") {
        convertedTemperature = temperature - 273.15;
        resultUnit = "Celsius";
    }

    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}