//Write a JavaScript program to find the closest value to 100 from two numerical values.
// Function to find the closest value to 100
function findClosestValue(value1, value2) {
  let diff1 = Math.abs(value1 - 100);
  let diff2 = Math.abs(value2 - 100);

  if (diff1 < diff2) {
    return value1;
  } else {
    return value2;
  }
}

let closestValue = findClosestValue(80, 120);
console.log(closestValue); // Output: 120
