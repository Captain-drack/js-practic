(function () {
  const oldLog = console.log;
  console.log = function (message) {
    const output = document.getElementById("consoleOutputSub");
    output.innerHTML += message + "<br>"; // Append new message

    oldLog.apply(console, arguments); // Keep default console.log behavior
  };
})();

const new_array = [1, 2, 3, [4, 5, 6], 7, [5, 8, 9, [3, 2, 8]]];

console.log(new_array.flat(Infinity), "-=-=-flat an array using array method");

// Flatten the array without using array method
let flatten_Array = [];

const flattenedArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray(arr[i]);
    } else {
      flatten_Array.push(arr[i]);
    }
  }
};

flattenedArray(new_array);
console.log(flatten_Array, "Flattened Array");

// Sum the values
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const totalSum = sumArray(flatten_Array);
console.log("Sum of Array Elements:", totalSum);

// Find the greatest and smallest values
const findGreatestAndSmallest = (arr) => {
  let greatest = -Infinity;
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatest) {
      greatest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { greatest, smallest };
};

const { greatest, smallest } = findGreatestAndSmallest(flatten_Array);
console.log("Greatest Value:", greatest);
console.log("Smallest Value:", smallest);
