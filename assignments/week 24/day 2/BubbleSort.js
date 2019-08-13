function bubbleSort(arr) {
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  }
  var noSwaps;
  
  for(let i = arr.length - 1; i > 0; i--) {
    noSwaps = false;
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j + 1);
        noSwaps = true;
      }
    }
    if(!noSwaps) {
      break;
    }
  }
  return arr;
}

bubbleSort([1,7,3,45,5])