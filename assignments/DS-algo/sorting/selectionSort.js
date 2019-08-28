function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = array[lowest];
      array[lowest] = array[i];
      array[i] = temp;
    }
  }

  return array;
}
