let arr = [2, 23, 44, 21, 46];
// newarr=[23,44,21,46,2];
// newarr=[44,21,46,2,23];
// newarr=[21,46,2,23,44];
function leftroatationone(arr) {
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // newarr.push(arr[i + 1]);
  }
  arr[arr.length - 1] = first;
  return arr;
}
console.log(leftroatationone(arr));

function leftroatationkth(arr, k) {
  // if (arr.length % k == 0) {
  //   return arr;
  // }
  k = k % arr.length;
  for (let j = 0; j < k; j++) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
  }

  return arr;
}
console.log(leftroatationkth(arr, 4));
