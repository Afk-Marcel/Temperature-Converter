# Temperature Conversion Script

This JavaScript script converts a temperature value from one metric (Celsius, Fahrenheit, or Kelvin) to another. The user is prompted to input the original temperature metric, the temperature value to be converted, and the target temperature metric for conversion.

## How It Works

1. **Select the Original Temperature Metric**: The user is first prompted to select the temperature metric they are converting from:

   - `C` for Celsius
   - `F` for Fahrenheit
   - `K` for Kelvin

2. **Enter the Temperature Value**: The user is then prompted to enter the numerical temperature value they want to convert.

3. **Select the Target Temperature Metric**: The user is prompted to select the temperature metric they want to convert to:

   - `C` for Celsius
   - `F` for Fahrenheit
   - `K` for Kelvin

4. **Conversion Logic**:

   - If converting from Celsius, the temperature is first converted to Kelvin.
   - If converting from Fahrenheit, the temperature is first converted to Kelvin.
   - If the input is already in Kelvin, no conversion is needed at this stage.

   The target metric is then checked, and the temperature is adjusted accordingly:

   - Convert from Kelvin to Celsius.
   - Convert from Kelvin to Fahrenheit.
   - If the target metric is Kelvin, no further conversion is needed.

5. **Output**: The result is displayed in the console, showing the original temperature value and its equivalent in the selected target metric.

## Example Usage

```javascript
// Sample user inputs
// mInput: "C"
// numInput: 25
// mOutput: "F"

// Expected console output
// "25 °C is 77 °F."
```

## Error Handling

- If the user inputs an invalid metric (not `C`, `F`, or `K`), the script will output an error message indicating that the input is incorrect and prompt them to try again.

## Requirements

- A JavaScript environment capable of executing the script, such as a web browser console.

## How to Run

1. Copy the script code to a JavaScript file or directly into a browser's console.
2. Execute the script.
3. Follow the prompts to enter the temperature metric, value, and target metric.
4. View the conversion result in the console.

## License

This script is open-source and available under the MIT License.
