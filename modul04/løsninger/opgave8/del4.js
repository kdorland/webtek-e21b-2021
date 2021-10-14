let tekst = process.argv[2]; // Input til programmet
console.log(tekst); // Printer input

/*
Et program der enten printer “forbudt” eller “godkendt”. Hvis inputteksten indeholder et ord fra følgende liste, skrives “forbudt”, eller skrives “godkendt”. Listen: “svin”, “hundehovede”, “skidespræller”, “skiderik”, “socialdemokrat”.
*/

if (tekst.includes("svin") || tekst.includes("hundehovede") || tekst.includes("skiderik")) {
  console.log("forbudt");
} else {
  console.log("godkendt");
}

