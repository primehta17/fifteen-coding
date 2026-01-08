let arr = [2, 23, 44, 21, 46];
let arr1 = [2, 23, 44, 21, 46];
let arr2 = [2, 23, 44, 21, 46];
// newarr=[23,44,21,46,2];//1
// newarr=[44,21,46,2,23];//2
// newarr=[21,46,2,23,44];//3
function leftroatationone(arr) {
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // newarr.push(arr[i + 1]);
  }
  arr[arr.length - 1] = first;
  return arr;
}
console.log(leftroatationone(arr));

function leftRotationKth(arr, k) {
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

console.log(leftRotationKth(arr, 3));

//optimize

function optimizeLeftRotation(arr, k) {
  let temp = [];
  k = k % arr.length;

  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
  }

  return temp;
}
console.log(optimizeLeftRotation(arr2, 3));
