function sumTalrække(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result = result + i;
  }
  return result;
}
console.log(sumTalrække(1,3)); // Skal udskrive 6
console.log(sumTalrække(2,5)); // Skal udskrive 14
