function convertTemperature(value, scale) {
  switch (scale) {
    case "C":
      return (value * 9) / 5 + 32 + "°F";

    case "F":
      return ((value - 32) * 5) / 9 + "°C";
    default:
      return "Invalid scale";
  }
}