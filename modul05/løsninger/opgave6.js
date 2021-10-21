// En funktion der tager et array af tal som input. Funktionen skal returnerer summen af alle tal.
function sumAfTal(array) {
  let sum = 0;
  for (let tal of array) {
    sum = sum + tal;
  }
  return sum;
}
console.log(sumAfTal([1,2,3,4]));

// En funktion der tager to arrays, og returnerer et nyt langt array hvor elementer fra de to arrays er sat sammen. Fx bliver [1, 2, 3] og [4, 5, 6] til [1, 2, 3, 4, 5, 6].

function sumToArrays(array1, array2) {
  let nytArray = [];
  for (let tal of array1) {
    nytArray.push(tal);
  }
  for (let tal of array2) {
    nytArray.push(tal);
  }
  return nytArray;
}

console.log(sumToArrays([1,2,3], [4,5,6]));


// En funktion der tager to arrays med samme længde, og hvor begge indeholder tal. Funktionen skal returnerer et nyt array hvor tallene er lagt parvis sammen. Fx hvis du har [1, 2, 3] og [4, 5, 6], så giver det [5, 7, 9] når de er lagt sammen.
function sumParvisToArrays(array1, array2) {
  let nytArray = [];
  
  // Tjek input
  if (array1.length !== array2.length) {
    console.log("Input er ikke lige lange");
    return;
  }

  for (let i = 0; i < array1.length; i++) {
    nytArray.push(array1[i] + array2[i]);
  }

  return nytArray;
}

console.log(sumParvisToArrays([1,2,3], [4,5,6]));

