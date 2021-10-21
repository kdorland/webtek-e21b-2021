// årstal - Det årstal du gerne vil tjekke.
// Return value: _true_ hvis årstallet er skudår, og ellers _false_.
function skudår(årstal) {
  let result = false;
  if (årstal % 4 === 0) {
    result = true;
  } else if (årstal % 100 === 0) {
    result = false;
  } else if (årstal & 400 === 0) {
    result = true;
  }
  return result;
}

console.log(skudår(2000));
console.log(skudår(2001));
console.log(skudår(2010));
console.log(skudår(1985));
console.log(skudår(2004));


