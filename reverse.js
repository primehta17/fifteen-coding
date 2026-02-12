let arr = [2, 33, 41, 11, 3, 44];
function reverse(arr) {
  let newarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
}
console.log(reverse(arr));
let j = arr.length - 1;
let newarray = [];
while (j >= 0) {
  newarray.push(arr[j]);
  j--;
}
console.log(newarray);

function twopointerreverse(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
console.log(twopointerreverse(arr));
