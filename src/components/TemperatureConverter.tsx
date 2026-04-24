import { useState } from "react";
import "../styles/TemperatureConverter.css";

type TemperatureUnit = "celsius" | "fahrenheit" | "kelvin";

interface ConversionResult {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
}

export const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>("celsius");

  const convertTemperature = (
    value: number,
    from: TemperatureUnit,
  ): ConversionResult => {
    let celsius: number;

    // Convert to Celsius first
    switch (from) {
      case "celsius":
        celsius = value;
        break;
      case "fahrenheit":
        celsius = (value - 32) * (5 / 9);
        break;
      case "kelvin":
        celsius = value - 273.15;
        break;
    }

    // Convert from Celsius to all units
    return {
      celsius: parseFloat(celsius.toFixed(2)),
      fahrenheit: parseFloat((celsius * (9 / 5) + 32).toFixed(2)),
      kelvin: parseFloat((celsius + 273.15).toFixed(2)),
    };
  };

  const numValue = parseFloat(inputValue);
  const isValidInput = !isNaN(numValue) && inputValue.trim() !== "";
  const result = isValidInput ? convertTemperature(numValue, fromUnit) : null;

  const unitLabels: Record<TemperatureUnit, string> = {
    celsius: "°C",
    fahrenheit: "°F",
    kelvin: "K",
  };

  return (
    <div className="temperature-converter">
      <h2>Temperature Converter</h2>

      <div className="converter-input-group">
        <div className="input-section">
          <label htmlFor="temp-value">Temperature Value:</label>
          <input
            id="temp-value"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter temperature"
          />
        </div>

        <div className="unit-section">
          <label htmlFor="unit-select">Unit:</label>
          <select
            id="unit-select"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as TemperatureUnit)}
          >
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
            <option value="kelvin">Kelvin (K)</option>
          </select>
        </div>
      </div>

      {isValidInput && result && (
        <div className="converter-results">
          <h3>Conversions</h3>
          <div className="results-grid">
            <div className="result-card">
              <span className="result-label">Celsius</span>
              <span className="result-value">
                {result.celsius} {unitLabels.celsius}
              </span>
            </div>
            <div className="result-card">
              <span className="result-label">Fahrenheit</span>
              <span className="result-value">
                {result.fahrenheit} {unitLabels.fahrenheit}
              </span>
            </div>
            <div className="result-card">
              <span className="result-label">Kelvin</span>
              <span className="result-value">
                {result.kelvin} {unitLabels.kelvin}
              </span>
            </div>
          </div>
        </div>
      )}

      {inputValue && !isValidInput && (
        <div className="error-message">Please enter a valid number</div>
      )}
    </div>
  );
};
