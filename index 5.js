function pickPeaks(arr) {
  let indices = [] // return array of peak positions or indices
  let peakValues = [] // return array of peak values
  for (let i = 1; i < arr.length - 1; i++) { 
    if (arr[i] > arr[i - 1]) {
      if (arr[i] > arr[i + 1]) { // standard case
        indices.push(i)
        peakValues.push(arr[i])
      } else if (arr[i] === arr[i + 1]) { // plaetau case
        let temp = i;
        while (arr[i] === arr[temp]) {
          i++;
          if (arr[temp] > arr[i]) {
            indices.push(temp)
            peakValues.push(arr[temp])
        }
        }
      }
    }
  }

  return { indices, peakValues } // return as an object
}

//pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]);
pickPeaks([1, 2, 2, 2, 1]);
