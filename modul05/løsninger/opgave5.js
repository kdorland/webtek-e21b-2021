// Returnerer en kopi af et array
function vendOm(array) {
  let nytArray = []; // Det nye array er tomt
  // Vi looper over alle gamle elementer
  for (let i = array.length - 1; i >= 0; i--) {
    // Indsæt et gammelt element i det nye array
    nytArray.push(array[i]);
  }
  return nytArray; // Returner det nye array
}

let array1 = [1, 2, 3, 4];
let array2 = vendOm(array1);
console.log(array2);
