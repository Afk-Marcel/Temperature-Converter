//Prompts the user to select the temperature metric they are converting from
let mInput = prompt("Select the temperature metric you are converting:\nC - Celsius\nF - Fahrenheit\nK - Kelvin");

//Prompt the user to enter the number to be converted
let numInput = parseFloat(prompt("Enter the number to be converted:"));

//Prompt the user to select the temperature metric they want to convert to
let mOutput = prompt("Enter the metric you would like to convert to:\nC - Celsius\nF - Fahrenheit\nK - Kelvin");

//Variable to store the converted temperature
let kConverter;

// Determine the original temperature metric and perform the conversion
if (mInput == "C") {
    // Celsius to Kelvin conversion
    kConverter = numInput + 273.15;

} else if (mInput == "F") {
    // Fahrenheit to Kelvin conversion
    kConverter = (numInput - 32) * 5 / 9 + 273.15;

} else if (mInput == "K") {
    // No conversion needed for Kelvin to Kelvin
    kConverter = numInput;
    
} else {
    // Handle incorrect input for the original metric
    console.log("Incorrect Input. Please enter C, F, or K");
}

// Determine the target temperature metric and adjust the converted temperature accordingly
switch (mOutput) {

    case "C":
        // Kelvin to Celsius conversion
        kConverter = kConverter - 273.15;
        break;

    case "F":
        // Kelvin to Fahrenheit conversion
        kConverter = (kConverter - 273.15) * 9 / 5 + 32;
        break;

    case "K":
        // No conversion needed for Kelvin to Kelvin
        break;

    default:
        // Handle incorrect input for the target metric
        console.log("Incorrect Output Metric. Please enter C, F, or K");
        break;
}

// Display the result in the console
console.log(`${numInput} °${mInput} is ${kConverter} °${mOutput}.`);