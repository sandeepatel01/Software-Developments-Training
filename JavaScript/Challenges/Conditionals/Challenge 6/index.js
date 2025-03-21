function trafficLightAction(color) {
  switch (color) {
    case "Red":
      return "Stop";
    case "Yellow":
      return "Go Down";
    case "Green":
      return "Go";
    default:
      return "Invalid Color";
  }
}