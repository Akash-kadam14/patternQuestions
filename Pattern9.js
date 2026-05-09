/*
      1
    2 1
  3 2 1
4 3 2 1

*/


const totalRows = 5;

for (let i = 1; i <= totalRows; i++) {
  let str = "";

  for (let j = 1; j <= totalRows; j++) {
    if (j <= totalRows - i) {
      row += "  "; // print space (2 spaces for alignment)
    } else {
      // Calculate descending numbers starting from i down to 1
      // For j = totalRows - i + 1 → print i
      // For j = totalRows → print 1
      str += (totalRows - j + 1) + " ";
    }
  }
  console.log(str.trimEnd());
}