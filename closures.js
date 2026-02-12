function outer() {
  let a = 2;
  function inner() {
    console.log(a);
  }
  return inner();
}
outer();
