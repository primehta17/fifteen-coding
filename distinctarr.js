let arr = [2, 3, 44, 21, 3, 21, 3];
function distinct(arr) {
  let seen = {};
  let nonduplicate = [];
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    if (seen[index] == undefined) {
      seen[index] = 1;
    } else {
      seen[index]++;
    }
  }
  for (let i in seen) {
    if (seen[i] == 1) {
      nonduplicate.push(Number(i));
    }
  }
  return nonduplicate;
}
console.log(distinct(arr));
