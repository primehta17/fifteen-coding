let arr = [10, 5, 12, 1, 3];
for (let i = 0; i < arr.length; i++) {
  let minIndex = i;
  for (let j = i; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) minIndex = j;
  }
  if (minIndex != i) {
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}
console.log(arr);
