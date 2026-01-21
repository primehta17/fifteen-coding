function prime(num) {
  if (num <= 1) return "notprime num";
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function rangeprime(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    if (prime(i)) {
      console.log(i);
    }
  }
}
console.log(prime(5));
console.log(rangeprime(6, 13));
