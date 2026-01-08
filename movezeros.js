//move zeros

let arr = [1, 0, 4, 5, 0, 1, 0];

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      let temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count++;
    }
  }
  return arr;
}
console.log(moveZeros(arr));
