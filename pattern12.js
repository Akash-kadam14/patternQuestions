// A
// A B
// A B C
// A B C D      
// A B C D E

// using built in meythod
for(let i = 1; i <= 5; i++){
    let str='';
    let charAsciiNum = 65;
    for(let j = 1; j<=i ; j++){
    str+= String.fromCharCode(charAsciiNum) + ' '
    charAsciiNum++;
    }
    console.log(str)
  }

// without built in
const totalRows = 5;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 1; i <= totalRows; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += alphabet[j - 1] + " ";
  }
  console.log(row.trimEnd());
}
