function frequency(array) {
  frequencyCounter = {};
  array.forEach(element => {
    if (element in frequencyCounter) {
      frequencyCounter[element]++;
    } else {
      frequencyCounter[element] = 1;
    }
  });
  console.log(frequencyCounter);
}

frequency(["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"]);
frequency([2, 3, 2, 4, 3, 5, 3]);
