let arr = [1, 22, 3, 32, 4];

function secondMax(arr) {
  let max = 0;
  let secMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secMax = max;
      max = arr[i];
    } else if (max > arr[i] && secMax < arr[i]) {
      secMax = arr[i];
    }
  }
  return secMax;
}
console.log(secondMax(arr));
