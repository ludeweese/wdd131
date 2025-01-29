const PI = 3.14;
let area = 0;

function circleArea(radius) {
  return radius * radius * PI;  // Calculate and return the area directly
}

area = circleArea(3);  // Call the function with radius 3
console.log("Area1:", area);  // Log the area

area = circleArea(4);  // Call the function with radius 4
console.log("Area2:", area);  // Log the new area
