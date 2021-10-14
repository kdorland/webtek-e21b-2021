// parseInt har til formål at lave en tekst om til et heltal
let tal1 = parseInt(process.argv[2]); // Input tal 1
let tal2 = parseInt(process.argv[3]); // Input tal 2
console.log(tal1, tal2); // Udskriver begge input-tal


if (tal1 < tal2) {
  for (let i = tal1; i <= tal2; i++) {
    console.log(i);
  }
} else {
  for (let i = tal2; i <= tal1; i++) {
    console.log(i);
  }
}



