function flatarr(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newarr = newarr.concat(flatarr(arr[i]));
    } else {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
let arr = [5, 6, 9, [1, 2, 3, [4, 2]]];
console.log(flatarr(arr));
